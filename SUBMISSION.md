# Team Collaboration Assignment Submission

## Repository Links
- Original repository: https://github.com/lexusy/taskflow-library
- Fork repository: https://github.com/13orisov/taskflow-library (fork of lexusy/taskflow-library)
- Feature PR: https://github.com/lexusy/taskflow-library/pull/1
- Release tag: https://github.com/lexusy/taskflow-library/releases/tag/v1.3.0

Note: GitHub does not allow forking a repository into the same account,
so the original project lives in organization lexusy.

## Fork Workflow Evidence
```bash
# Show remotes configuration
$ git remote -v

# Show merged PR in history
$ git log --oneline --grep="priority"
```
(actual output is at the end of this file)

## Code Review Participation
1. PR I created: https://github.com/lexusy/taskflow-library/pull/1
   - Review feedback received: add JSDoc for public methods, add tests for invalid
     and default priority, move priorities to a reusable constant
   - How I addressed it: commit "refactor: address review comments" - JSDoc,
     3 new tests, Task.PRIORITIES constant, API docs updated

2. PR I reviewed: https://github.com/lexusy/taskflow-library/pull/2
   - Comments I made: limit for labels, missing tests, missing API documentation
   - Improvements suggested:
     - max 5 labels per task (Task.MAX_LABELS), addLabel returns boolean
     - tests for adding, duplicates/empty labels, limit
     - addLabel section in docs/API.md and CHANGELOG entry
   - After PR #1 was merged, PR #2 had conflicts in 4 files - resolved by merging main

## Release Management
1. Version bump: 1.2.0 → 1.3.0
2. Changelog updated: Yes
3. Tag created: v1.3.0 (annotated) + GitHub Release
4. Semantic versioning followed: Yes (minor release for new features)
5. Release PR: https://github.com/lexusy/taskflow-library/pull/3

## Workflow Analysis
Current workflow: GitHub Flow
- Pros experienced:
  - Simple model: one main branch, every change goes through a PR
  - Fork model lets contributors work without write access
  - PR template and review keep quality (docs, tests, changelog)
- Cons experienced:
  - Parallel PRs touching the same files cause conflicts (task.js, CHANGELOG.md)
  - No CI: "Tests pass" is checked manually
  - Release preparation needed a branch borrowed from Git Flow
- Recommended improvements:
  - GitHub Actions CI running tests on each PR
  - Branch protection with required approval
  - Keep the fork synced with upstream regularly (gh repo sync)
  - Changelog fragments to avoid conflicts

## Verification Commands
```bash
# Verify fork setup
git remote -v | grep upstream

# Verify tags
git tag -l "v1.3*"

# Verify PR was merged
git log --grep="feat:" --oneline

# Check release tag details
git show v1.3.0
```

## Self-Assessment Checklist
- [x] Successfully created and configured fork
- [x] Made meaningful contribution via PR
- [x] Participated in code review (both sides)
- [x] Followed project contribution guidelines
- [x] Created proper release with semantic versioning
- [x] Analyzed different workflow strategies
- [x] Documented all processes

## Actual Command Output
```text
$ git remote -v
origin	https://github.com/13orisov/taskflow-library.git (fetch)
origin	https://github.com/13orisov/taskflow-library.git (push)
upstream	https://github.com/lexusy/taskflow-library.git (fetch)
upstream	https://github.com/lexusy/taskflow-library.git (push)

$ git log --oneline --grep="priority"
b37af6e Merge pull request #1 from 13orisov/feature/task-priority
146ace5 test: add tests for task priority
53bf427 feat: add priority support to Task class

$ git log --grep="feat:" --oneline
27ff737 Merge pull request #2 from lexusy/feature/task-labels
b37af6e Merge pull request #1 from 13orisov/feature/task-priority
4b59003 feat: add labels support to Task class
53bf427 feat: add priority support to Task class

$ git tag -l "v1.3*"
v1.3.0

$ git show v1.3.0 --stat
tag v1.3.0
Tagger: 13orisov <fleff911@gmail.com>
Date:   Mon Oct 5 14:25:16 2026 +0300

Release version 1.3.0

Features:
- Task priorities
- Task labels
- Improved validation

commit e120687ab55c4cebe01febeeee2e07423a262fa5
Merge: 27ff737 d575cff
Author: 13orisov <fleff911@gmail.com>
Date:   Mon Oct 5 14:25:10 2026 +0300

    Merge pull request #3 from 13orisov/release/1.3.0
    
    Release 1.3.0

 CHANGELOG.md        | 10 ++++++++--
 docs/API.md         |  8 ++++++++
 package.json        |  2 +-
 src/board.js        | 31 ++++++++++++++++++++++++++++---
 tests/board.test.js | 29 +++++++++++++++++++++++++++++
 5 files changed, 74 insertions(+), 6 deletions(-)
```
