exports.callSort = function(callDurationList) {
callSortList = [];
var total = callDurationList.sort(function(a, b) {
    return( parseInt(a.Duration) - parseInt(b.Duration));
});
  return total;
};
