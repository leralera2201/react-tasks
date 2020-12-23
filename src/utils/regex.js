export default {
  lowerCase: new RegExp(/(?=.*?[a-z])/),
  upperCase: new RegExp(/(?=.*?[A-Z])/),
  number: new RegExp(/\d/),
  date: new RegExp(
    /((19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/,
  ),
};
