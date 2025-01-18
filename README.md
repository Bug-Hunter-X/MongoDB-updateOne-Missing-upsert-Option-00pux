# MongoDB updateOne Missing upsert Option

This repository demonstrates a common error when using the `updateOne` method in MongoDB.  The provided code snippet shows an incorrect usage, missing the crucial `upsert: true` option. This leads to unexpected behavior where the update operation only occurs if a document matching the filter already exists.  The solution file corrects the issue by including `upsert: true` to insert a new document if one doesn't exist.

## Bug Description:
The bug lies in the omission of the `upsert: true` option in the `updateOne` method. Without it, if a document with `name: 'John Doe'` doesn't exist, the update operation fails silently, and no new document is inserted. This can lead to data inconsistencies and unexpected results. 

## Solution:
Adding `upsert: true` to the `updateOne` parameters ensures that if a matching document is not found, a new document is inserted with the specified fields.