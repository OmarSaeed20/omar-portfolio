# Case Study: Rehla — Multi-Role Ride-Hailing with Shared Real-Time State

> An engineering case study on building four coordinated applications from one Flutter codebase while keeping real-time trip state consistent across all roles.

---

## Context

Rehla is a ride-hailing platform with four distinct roles — Driver, Passenger, Operator, and Station — each requiring its own application. The Driver app handles trip acceptance and navigation. The Passenger app handles booking and live trip tracking. The Operator app manages the fleet and monitors trips. The Station app handles pickup-point operations.

All four roles operate against the same backend and the same real-time trip data. The product is live in production, with apps on Google Play, the App Store, and the web.

---

## The Problem

The core engineering question is not "how to build four apps" — it is "how to keep four role-specific clients consistent against one real-time state model without role logic leaking into shared layers."

In a ride-hailing platform, trip state is shared: when a Driver accepts a trip, the Passenger must see "accepted" — not "searching." When an Operator reassigns a trip, both Driver and Passenger must reflect the change immediately. Classic multi-app drift occurs when each app maintains its own interpretation of trip state, and the apps diverge over time or under network interruption.

The challenge has three dimensions:

1. **Code sharing without coupling**: four apps should share networking, models, and real-time logic, but role-specific UI and feature modules must not leak into the shared core.
2. **Real-time consistency**: all roles viewing the same trip must see the same state, with no multi-app drift.
3. **Release independence**: each app has its own flavor, namespace, signing configuration, and store release. A fix to the shared core must propagate to all roles from a single change — without forcing all apps to release simultaneously.

[OMAR: FILL IN — 1–2 sentences on what actually went wrong before the redesign, if applicable. e.g. "Before the shared core was extracted, trip state propagation was duplicated across role apps, and a fix in one app required manual replication in the others — leading to temporary state divergence between Driver and Passenger." If the shared core was built from the start, say so.]

---

## The Design

### Shared Core, Role-Specific Shells

The architecture is a **shared core** extracted from the common domain: networking (via playx_network / Dio), data models, real-time trip state synchronization over WebSocket, and location-service abstractions. Each role app is a thin shell — a role-specific entry point, feature modules, and UI — that consumes the shared core.

This means a fix in trip state propagation lands once, in the shared core, and propagates to all four apps. The alternative — four independent implementations of trip state — was rejected because the maintenance cost of keeping them synchronized would exceed the cost of the shared core, and the risk of drift was structural.

[OMAR: FILL IN — 2–3 sentences on the actual boundary. e.g. "The shared core lives in a separate package within the monorepo. Role apps import it as a dependency. The boundary is at the domain layer — the core exposes trip state and networking, not UI widgets. Each role app owns its own presentation layer." Enough detail for a senior engineer to see where the seam is.]

### Trip State as a Single Source of Truth

Trip state is modelled as a single reactive state object, fed by WebSocket events, and consumed differently per role screen. The Driver screen reacts to the same trip state object as the Passenger screen — they simply render different views of it.

This prevents the classic multi-app drift scenario where Driver sees "accepted" but Passenger sees "searching." Both are reading the same state; the difference is interpretation, not data. If the WebSocket drops, all roles degrade to the same last-known state, and all roles reconcile to the same state on reconnect.

[OMAR: FILL IN — brief description of how the reactive state model works in practice. e.g. "Trip state is a GetX Rx that is updated by WebSocket events. Each role screen observes the relevant fields. The state model is a sealed class with variants: Searching, Accepted, InProgress, Completed, Cancelled." 2–3 sentences.]

### Flavor-Driven Build Matrix

Each app has its own flavor with a matching namespace, iOS xcconfig wiring, and Android source sets. This enables four production apps from one repository, each with its own package ID, signing configuration, and store listing. The flavor configuration is reviewed in pull requests — flavor setup, Firebase integration, and CI/CD pipeline configuration are all part of the review checklist.

[OMAR: FILL IN — 1 sentence on how flavors are structured in practice. e.g. "Flavors are defined in flutter_flavorizr with per-flavor iOS xcconfig and Android source sets. Codemagic builds each flavor as a separate workflow." If this is accurate; adjust if not.]

---

## Outcome

Four production apps were shipped from one repository:

- **Driver**: Google Play and App Store
- **Passenger**: Google Play
- **Operator**: Google Play and Web
- **Station**: Web

The shared core means real-time trip fixes propagate to all roles from a single change. The flavor-driven build matrix means each app releases independently — a fix to the shared core does not require all four apps to release simultaneously, though it is available to all.

No metrics are claimed. The outcome is structural: one repository, four production apps, one shared real-time state model, no multi-app drift.

---

## What I Would Carry Forward

The key decision in this work was where to draw the boundary between shared core and role shell. Draw it too high and the core becomes a leaky abstraction — role concerns contaminate the shared layer. Draw it too low and you lose the reuse that justifies the architecture.

The boundary that worked was the domain layer: the core owns trip state, networking, models, and location — but it does not own UI, navigation, or role-specific feature logic. This is not the only valid boundary, but it is the one that held up across four production apps without requiring structural rework.

The second lesson is that multi-app architecture is a CI/CD problem as much as a code problem. The shared core only works if a fix can propagate to all apps without manual replication. That required the flavor-driven build matrix and the PR review process to be designed for it — not added as an afterthought.

---

*This case study is written to be publishable. Details are kept at the architectural level. No metrics beyond the facts stated in the CV are claimed.*