/**
 * Created by gtkrab on 4/19/16.
 */
let uriEncode = function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
};
export default uriEncode;
