exports.callSort = function(callDurationList) {
callSortList = [];
var total = callDurationList.sort(function(a, b) {
    return( parseInt(a.duration) - parseInt(b.duration));
});
  return total;
};
