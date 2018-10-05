# test-utilities

[![Build Status](https://travis-ci.org/strange-developer/test-utilities.svg?branch=master)](https://travis-ci.org/strange-developer/test-utilities) [![Coverage Status](https://coveralls.io/repos/github/strange-developer/test-utilities/badge.svg)](https://coveralls.io/github/strange-developer/test-utilities)

A collection of test utilities for web applications.

### select(qaTag: string): string

Takes in a string argument of your qa selector and returns a CSS selector.

Example return value:

`[data-qa="get-react-component__works"]`

### qa(qaTag: string): object

Takes in a string argument of your qa tag and returns an object to add to your React component.

Example return value:

`{ 'data-qa': 'get-react-component__works' }`

Example usage:

`<SomeComponent {...qa('get-react-component__works')} />`
