
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.15f0d864fd37f3a71db6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7998.latest.pt-BR.ea1f1516075efaf98701.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4109.latest.pt-BR.0218a052e976e7974c26.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.9f43ba93f8b7ea7298cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.0702556820ba724210c0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.pt-BR.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/513.latest.pt-BR.522f78df65b43ee8f370.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9719.latest.pt-BR.94eb9f5a18103a3742f9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.latest.pt-BR.55c0d6bba42608874cb2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.pt-BR.e039d32a43a4994ccb21.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2872.latest.pt-BR.a683944c225ed0cb34f0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.50da05be1877e7cf2d75.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/7998.latest.pt-BR.2bca5c0a646fa4b3c156.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.71184ade77e999e513cd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.14532e2108b477e5b681.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  