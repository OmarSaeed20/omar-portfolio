# Case Study: Fleet GPS Tracking — Event-Trigger System Redesign

> An engineering case study on diagnosing and rebuilding a production real-time state system in a live fleet-tracking application.

---

## Context

The product is a real-time GPS fleet tracking platform, live in production in Saudi Arabia. Fleet operators depend on sub-minute location freshness, reliable geofencing, and accurate event-triggered alerts — stale data or missed events directly damage the product's value to operators.

The event-trigger system is the component responsible for deciding when the application should react to location updates: entering or leaving geofences, crossing thresholds, schedule transitions, and similar state-driven events. It is the bridge between raw location telemetry and the operational alerts that fleet managers act on.

---

## The Symptom

The event-trigger system had accumulated outstanding tracking and validation defects. The team was fixing symptoms — individual missed alerts, duplicated notifications, stale geofence transitions — without a root cause, because the defects were not localised to a single bug. They were structural: the system's state representation made certain classes of error inevitable as the number of tracked conditions grew.

[OMAR: FILL IN — 1–2 specific examples of defects users or operators actually saw. e.g. "A vehicle entering a geofence would sometimes trigger the enter alert twice, or not at all if the previous exit event was missed." Keep it concrete and client-safe.]

---

## Why the Flat-Field Design Failed

The event-trigger system was built on 21 independent reactive fields — individual boolean, enum, or timestamp values, each representing one tracked condition or schedule state. Each field was reactive, meaning UI and event logic re-evaluated whenever any field changed.

This design works for a small number of independent conditions. It breaks when conditions are **interdependent** — which they inevitably become in a fleet scheduling product. The failure mode is combinatorial: with 21 independent fields, the number of valid state combinations grows exponentially, and each combination may require different event-trigger logic. No amount of individual field validation can cover all combinations, because correctness depends on the **relationship** between fields, not just their individual values.

The consequences were:

- **Duplicated logic**: the same transition condition was checked in multiple places because no single field owned the "current schedule state" — each field held a fragment of it.
- **Unreachable states**: some field combinations were logically impossible but not prevented by the type system, so defensive code proliferated to handle states that should never occur.
- **Validation gaps**: a field could be individually valid while the combined state was inconsistent — and the validation layer had no single point at which to check the full state.

The root cause was not a missing test or a careless edit. It was the state model itself: 21 independent fields cannot represent a coherent day-schedule without an explosion of pairwise coordination logic.

---

## The Redesign

The redesign replaced the 21 flat reactive fields with a single consolidated **day-schedule state model** — one state object that represents the complete schedule context for a tracked entity at a given moment.

Instead of 21 independent fields reacting individually, the system now has:

- **One source of truth**: the day-schedule state model owns the full context — current schedule phase, active geofences, threshold status, and transitions. No other component holds a fragment of schedule state.
- **Explicit transitions**: state changes go through the model, which validates the transition as a whole (is this transition legal given the current full state?) rather than checking individual fields in isolation.
- **Whole-state validation**: because the state is a single object, validation runs against the complete picture. Inconsistent combinations are prevented at the type level, not patched over with runtime checks.

This makes entire classes of defect **impossible by construction** rather than merely fixed:

- Duplicated logic is eliminated because there is exactly one place where schedule state is evaluated.
- Unreachable states are eliminated because the state model's type does not admit them.
- Validation gaps are eliminated because validation operates on the whole state, not fragments of it.

[OMAR: FILL IN — brief description of the actual state model shape. e.g. "The model is a sealed class with variants for each schedule phase (Idle, Active, InGeofence, ThresholdBreached, Transitioning), each carrying only the data relevant to that phase. Transitions are explicit methods that return the next state or reject the transition." 2–3 sentences, enough for a senior engineer to understand the structure.]

---

## Outcome

The redesign eliminated the duplicated logic that had accumulated across the 21 flat fields. The outstanding tracking and validation defects were cleared — not by patching each one individually, but by removing the structural conditions that made them possible.

No metrics are claimed here. The outcome was qualitative: the state model became a single, reviewable artifact, and the defect classes that required constant defensive patching no longer occurred.

[OMAR: FILL IN — if you have any concrete evidence of improvement that is factual and non-metric, add it here. e.g. "The PR audit for this change removed N defensive checks that were no longer needed." If you have nothing beyond the facts above, leave this section as-is — it is stronger without invented numbers.]

---

## What I Would Carry Forward

The lesson I carry from this work is not "always consolidate fields" — that would be an oversimplification. The lesson is to recognise when a state representation has crossed from "simple" to "combinatorial," and to treat that crossing as a structural problem rather than a testing problem.

With 21 flat fields, the temptation is to add more tests, more validation, more defensive code. That path leads to a system that is increasingly expensive to maintain without becoming more correct. The redesign was cheaper than continued patching, and it made the codebase simpler to change going forward — which is the actual goal.

The second lesson is that this kind of redesign is only safe to attempt when you have production ownership. I was not consulting on this system; I was responsible for it. That meant I could validate the redesign against real production conditions, not just tests, and I owned the consequences. Without that ownership, a structural redesign of a live real-time system would be irresponsible.

---

*This case study is written to be publishable. The end client is not named, and details are kept at the architectural level. No metrics beyond the facts stated in the CV are claimed.*