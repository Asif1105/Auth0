const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');

const PACKAGES = [
    'APP',
    'CORE',
    'DLS'
];

module.exports = custom({
    minHeaderWidth: 10,
    maxHeaderWidth: 120,
    types: {
        'NEW FEATURE ': {
            description: 'Change which introduces a New Application Feature.',
            title: 'NEW FEATURE '
        },
        'BUG FIX ': {
            description: 'Change which introduced a Bug Fix',
            title: 'BUG FIX '
        },
        'BREAKING CHANGE ': {
            description: 'Changes which introduce a Breaking Change (non-backwards compatible change).',
            title: 'BREAKING CHANGE '
        },
        'NEW PACKAGE ': {
            description: 'Change which introduces a New iOn Monorepo Package.',
            title: 'NEW PACKAGE '
        },
        'DOCUMENTATION ': {
            description: 'Changes to Documentation (API doc comments, examples, markdown, etc.)',
            title: 'DOCUMENTATION'
        },
        'TECHNICAL DEBT ': {
            description: 'Changes which pay down on Technical Debt (refactoring, missing test, formatting, etc.).',
            title: 'TECHNICAL_DEBT DEBT'
        },
        'TOOLING ': {
            description: 'Changes to internal Tooling, Scripts, etc.',
            title: 'TOOLING'
        },
        'DEPENDENCIES ': {
            description: 'Changes to package dependencies (new package, package updates, upgrades, etc.)',
            title: 'DEPENDENCIES'
        }
    },
    scopes: PACKAGES,
    skipScope: false,
    disableScopeLowerCase: true,
    defaultBody: ''
});