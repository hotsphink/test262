// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase()
 *
 * @id: S15.5.4.17_A1_T1;
 * @section: 15.5.4.17;
 * @description: Arguments is true, and instance is object;
 */

var __instance = new Object(true);

__instance.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLocaleLowerCase() !== "true") {
  $ERROR('#1: __instance = new Object(true); __instance.toLocaleLowerCase = String.prototype.toLocaleLowerCase;  __instance.toLocaleLowerCase() === "true". Actual: '+__instance.toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
