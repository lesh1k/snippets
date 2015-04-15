// if
// <form id="my-form">
//      <input name="my-text" value="my-text-value">
// </form>
// then
// $("#my-form").serializeObject() will return {'my-text': 'my-text-value'}

$.fn.extend({
    serializeObject: function () {
        var form = this[0];
        var data = $(form).serializeArray();
        var obj = {};
        $.each(data, function (k, v) {
            obj[v.name] = v.value;
        });
        return obj;
    },
});