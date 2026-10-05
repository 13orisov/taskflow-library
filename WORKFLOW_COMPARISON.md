# Workflow Comparison for TaskFlow

## Current: GitHub Flow
- Single main branch
- Feature branches for all changes
- PRs for everything
- Deploy from main

## Alternative 1: Git Flow
Branches: main, develop, feature/*, release/*, hotfix/*

Pros:
- Clear separation of development/production
- Dedicated release preparation (we used release/1.3.0 for version bump and changelog)

Cons:
- More complex for small team
- Slower feature delivery
- More merges between long-living branches

## Alternative 2: Trunk-based Development
Pros:
- Very fast iteration
- Minimal branching, almost no merge conflicts

Cons:
- Requires excellent CI/CD
- Higher risk without feature flags

## Our Experience
- Two parallel feature PRs (priority, labels) edited the same files and caused a merge conflict
- The release branch (borrowed from Git Flow) was useful to freeze 1.3.0 and fix bugs before tagging

## Recommendation
Stick with GitHub Flow because:
1. Team size is small (< 10 developers)
2. We deploy frequently
3. Simple model reduces errors

Add: CI on every PR, branch protection, short-lived branches.
