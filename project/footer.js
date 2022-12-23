$(document).ready(function() {
    // Tracking button press in analytics
    $("a.button").click(function() {
        // and the attribute "data-name" to track.
        let btnName = $(this).attr('data-name');
        if (btnName == null) {
            console.error("Analytics button has no name");
            return;
        }

        let props = {
            "name": btnName,
            "path": window.location.pathname,
            "elementId": $(this).attr('id'),
            "elementText": $(this).text()
        };
        $.each(this.attributes, function(_, attr) {
            if (attr.name.startsWith('data-analytics-prop-')) {
                let key = attr.name.split('data-analytics-prop-')[1];
                props[key] = attr.value;
            }
            
            if (attr.name.startsWith('data-linkedin-track-conversion')) {
                if (attr.value != null) {
                    // temp disabled
                    // window.lintrk('track', { conversion_id: attr.value });
                }
            }
                
        });
        analytics.track("Button Click", props);
    });
    function openLeadForm() {
        $('.modal-wrapper').css({'opacity': '1',
            'display': 'block'});
        tfPopover.open();
    }
    $('#lead_btn_header').click(function() {
        openLeadForm();
    });
    $(".lead_form_bottom").click(function() {
        openLeadForm()
    });

});

(function (d, u, h, s) {
    h = d.getElementsByTagName('head')[0];
    s = d.createElement('script');
    s.async = 1;
    s.src = u + new Date().getTime();
    h.appendChild(s);
})(document, 'https://grow.clearbitjs.com/api/pixel.js?v=');
