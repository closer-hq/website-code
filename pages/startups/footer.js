$(document).ready(function() {
    const tfLongLeadForm = window.tf.createPopup('hNIdq5Ww', {
        container: document.querySelector('#modal-form'),
        onSubmit: (event) => {
            let props = {
                "type": "lead_form",
                "form_id": "hNIdq5Ww",
                "tf_response_id": event.responseId,
                "path": window.location.pathname
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

    function openLongLeadForm() {
        $('.modal-wrapper').css({'opacity': '1',
            'display': 'block'});
        tfLongLeadForm.open();
    }

    $('#lead_btn_header_long').click(function() {
        openLongLeadForm();
    });
    $(".lead_form_bottom_long").click(function() {
        openLongLeadForm();
    });
});