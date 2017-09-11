//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

const glob = require('glob'),
  path = require('path'),
   execSync = require('child_process').execSync;

//let clientDtsPaths = glob.sync(path.join(__dirname, '../../lib/services/**/lib/*.d.ts'));

let tsconfigPath = path.join(__dirname, '../../tsconfig.json');
// clientDtsPaths = clientDtsPaths.filter(function(item) {
//   return (item.match(/.*computeManagement2.*/ig) !== null);
// });


let result;
  let cmd = `tsc -p ${tsconfigPath}`;
  try {
    result = execSync(cmd, { encoding: 'utf8' });
    console.log(result);
  } catch (err) {
   console.log(err.stdout);
  }

// clientDtsPaths.forEach((clientPath) => {
  
// });