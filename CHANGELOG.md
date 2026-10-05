# Changelog

All notable changes to this project are documented in this file.
Format: Keep a Changelog. Versioning: Semantic Versioning.

## [1.3.0] - 2026-10-05
### Added
- Task priority support with setPriority() method
- Task labels with addLabel() method

### Changed
- Improved task validation: Board.addTask() accepts only Task instances

### Fixed
- Board filtering by status: getTasks() returns a copy and handles unknown statuses

## [1.2.0] - 2026-10-05
### Added
- Task class with status management
- Board class with filtering by status
