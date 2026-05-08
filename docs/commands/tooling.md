# Tooling & Utilities

## Enable Format on Save (VS Code)
- Open Settings (Ctrl + ,)
- Search: "Format On Save"
- Enable option

## Project Tree (ignore heavy folders)
tree -I "log|tmp|storage|node_modules|vendor/bundle|public/assets|.git"

---

# RuboCop

## Run Linter

```bash
bin/rubocop
```

### Auto Fix Offenses

Automatically fixes supported formatting and style issues.

```bash
bin/rubocop -A
```

## Common Fixes
- Missing final newline
- Spacing issues
- Style formatting
- Safe autocorrections