# Varnish Cache server

## Cache Server Error
```
Error 503 Service Unavailable
Service Unavailable

Guru Mediation:
Details: cache-ewr18155-EWR 1623147030 256802374

Varnish cache server
```

### Reasons for this 503
- The website is using Varnish Cache to cache and serve content, and that Varnish Cache is **unable to reach the back end server**. 
- Varnish Cache issues the **Guru Meditation error** when a connection has timed out or the Varnish Cache server has made too many requests to the back end server without getting a response. 
- Instead of making an infinite number of requests to an unhealthy back end, Varnish Cache issues the 503 error to let the visitor (and website owner) it is likely the website manager is already working on a fix and your best bet is to try again later.
- Find the logs by:
```
    $ varnishlog -q 'RespStatus == 503' -g request
```

- [Troubleshooting Varnish Cache 503 Guru Meditation Error](https://www.section.io/blog/varnish-cache-503-error-guru-meditation/)

## Status sites
- [Github](https://www.githubstatus.com/)
- [Salesforce](https://trust.salesforce.com/)

