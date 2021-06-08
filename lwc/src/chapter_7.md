# 7. Lightning Data Service

![Fish](https://lh5.googleusercontent.com/proxy/WJw71U8NbKDZAmeqDruztTrqWD-xhAejU4Kjgak4PfjoahwOGD3qxKBdZ-sxCPn51ovSwJbroDyk7bobkZYzmNNdDpeTEjAabt8xYJCEpF9EMdeYSSunT17ZzJyBDOHQ0KE49gf8JCk5Ox6x-3ILW2Noa3O2BBzTpAjxB32iaWzyW6Fw3sZEFpPcbxAACKZ3WE3nquE6qISydR3xg0-PX-L9KChPpIPmlE2Jp1C17wGXCw=s1920-w1920-h1080-p-k-no-nd-mv)

- Records loaded in Lightning Data Service (LDS) are cached and **shared across components**. 
- If a page is composed of components showing the same record, all components **show the same version of the record**. 
- Components accessing the same record see significant performance improvements, because a record is **loaded once**, no matter how many components are using it.


- Supports all custom objects and all the standard objects that User Interface API supports.
- External objects, person accounts, and custom metadata types are not supported.

### Managed
- Lightning Data Service **manages data for you**
    -  changes to a record are reflected in all the technologies built on it. 
- Contrastingly, data from Apex is not managed; **you must refresh the data**.
- If Lightning Data Service (LDS) detects a change to a record or any data or metadata it supports
    - all components using a relevant @wire adapter receive the new value. The detection is triggered if:
        - A Lightning web component mutates the record.
        - The LDS cache entry expires and then a Lightning web component’s @wire triggers a read
- LDS Loads record data progressively.
- Caches results on the client.
- Invalidates cache entries when dependent Salesforce data and metadata changes.
- Optimizes server calls by bulkifying and de-duping requests.

![LDS](https://resources.docs.salesforce.com/images/96c6c99f3a530fbd2600a734ee804326.png)





