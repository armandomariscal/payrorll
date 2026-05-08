# Pull Request Descriptions

PR descriptions should match the scope and complexity of the change.  
The goal is to make reviews faster, clarify intent, and document important implementation decisions.

---

## Recommended Structure for Medium or Large Changes

Use this structure when the PR introduces new features, architectural changes, integrations, or non-trivial business logic.

### Template

```md
## What

What changed?

## Why

Why was it needed?

## How

How was it implemented?
Example
## What

Adds the employee delete flow between the Webix frontend and Rails API.

## Why

Allows employee records to be removed directly from the UI with proper API communication.

## How

- Added DELETE endpoint for employees API
- Implemented Webix delete action with confirmation modal
- Configured CORS support for cross-origin requests
```

---

## Simple Descriptions

For small fixes, refactors, documentation updates, or isolated UI changes, a short summary is usually enough.

### Example
```md
Adds CORS configuration for local API requests.
```

or

```md
Refactors employee table actions and improves delete feedback handling.
```

## Detailed Descriptions

Use more detailed descriptions when the PR includes:

- Multiple modules or services
- Infrastructure changes
- Authentication or security changes
- Database migrations
- Breaking changes
- Complex debugging or workflow updates

Additional sections may include:

- Risks
- Testing
- Migration Notes
- Rollback Notes
- Performance Impact
- General Recommendations
- Focus on intent, not every line changed
- Prefer concise explanations over implementation noise
- Group related changes together
- Avoid repeating information already visible in the diff
- Make the PR understandable without opening every file