  // <!-- 跳转上一页 -->
  function PageLast(event) {
    var pre = event.target;
    var detail = pre.parentNode.parentNode.getElementsByClassName('page-detail');
    var num = pre.parentNode.parentNode.getElementsByClassName('page-num')[0];
    let numNow = num.innerHTML.match(/\d+/g)[0]; //文本当前页数，设置为文本的第一个数字，可根据实际情况更改
    if (numNow != 1) {
        let pageNum = numNow - 1;
        num.innerHTML = pageNum + '/' + detail.length;      //文本编辑，可根据实际情况更改
        detail[pageNum].classList.add('hide');
        detail[pageNum - 1].classList.remove('hide');
    }
}
// <!-- 跳转下一页 -->
function PageNext(event) {
    var pre = event.target;
    var detail = pre.parentNode.parentNode.getElementsByClassName('page-detail');
    var num = pre.parentNode.parentNode.getElementsByClassName('page-num')[0];
    let numNow = num.innerHTML.match(/\d+/g)[0]; //文本当前页数，设置为文本的第一个数字，可根据实际情况更改
    if (numNow != detail.length) {
        let pageNum = parseInt(numNow) + 1;
        num.innerHTML = pageNum + '/' + detail.length;      //文本编辑，可根据实际情况更改
        detail[numNow].classList.remove('hide');
        detail[pageNum - 2].classList.add('hide');
    }
}