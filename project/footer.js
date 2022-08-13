!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="0sNjB43BvXuairroA5SEUplWhIJFe3MP";;analytics.SNIPPET_VERSION="4.15.3";
    analytics.load("0sNjB43BvXuairroA5SEUplWhIJFe3MP");
    analytics.page();
    // TODO track "day of week" and "hour of day" for all events and pages
}}();

$(document).ready(function() {

    // Tracking button press in analytics
    $(".analytics-button").click(function() {
        // requires a-ref element with the class .button
        // and the attribute "data-name" to track.
        let btnName = $(this).attr('data-name');
        if (btnName == null) {
            console.error("Analytics button has no name");
            return;
        }

        let props = {
            "name": btnName,
            "path": window.location.pathname,
        };
        $.each(this.attributes, function(_, attr) {
            if (attr.name.startsWith('data-analytics-prop-')) {
                let key = attr.name.split('data-analytics-prop-')[1];
                props[key] = attr.value;
            }
        });
        analytics.track("Button Click", props);
    });

    const { open, close, toggle, refresh } = window.tf.createPopup('BWrTaXCe', {
        container: document.querySelector('#modal-form'),
        onSubmit: function() {
            let props = {
                "type": "lead_form",
            }
            let params = new URLSearchParams(window.location.search);
            for (const [k, v] of params.entries()) {
                if (k.startsWith('utm_')) {
                    dict[k] = v;
                }
            }
            analytics.track("Form Submit", props)
        },
        onClose: function() {
            $('.modal-wrapper').css({'opacity': '0',
                'display': 'none'});
        }
    });
    $(".lead_form_bottom").click(function() {
        $('.modal-wrapper').css({'opacity': '1',
            'display': 'block'});
        open();
    });

});

(function (d, u, h, s) {
    h = d.getElementsByTagName('head')[0];
    s = d.createElement('script');
    s.async = 1;
    s.src = u + new Date().getTime();
    h.appendChild(s);
})(document, 'https://grow.clearbitjs.com/api/pixel.js?v=');
