// Copyright (C) 2015 André Bargull. All rights reserved.
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.add
description: >
  Atomics.add.name is "add".
includes: [propertyHelper.js]
features: [Atomics]
---*/

assert.sameValue(Atomics.add.name, "add");

verifyNotEnumerable(Atomics.add, "name");
verifyNotWritable(Atomics.add, "name");
verifyConfigurable(Atomics.add, "name");
