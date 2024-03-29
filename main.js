document.addEventListener('DOMContentLoaded', function () {
  var baseInfo = {}
  var titPoints = []
  var opponentPoints = []
  var images = []
  var text = ''

  var frag = document.createDocumentFragment()

  baseInfo.year = document.getElementById('year')
  baseInfo.season = document.getElementById('season')
  baseInfo.playNumber = document.getElementById('playNumber')
  baseInfo.opponent = document.getElementById('opponent')
  baseInfo.date = document.getElementById('date')
  baseInfo.location = document.getElementById('location')

  titPoints[0] = document.getElementById('tit1Q')
  titPoints[1] = document.getElementById('tit2Q')
  titPoints[2] = document.getElementById('tit3Q')
  titPoints[3] = document.getElementById('tit4Q')
  titPoints[4] = document.getElementById('titTotal')
  opponentPoints[0] = document.getElementById('opponent1Q')
  opponentPoints[1] = document.getElementById('opponent2Q')
  opponentPoints[2] = document.getElementById('opponent3Q')
  opponentPoints[3] = document.getElementById('opponent4Q')
  opponentPoints[4] = document.getElementById('opponentTotal')

  images[0] = document.getElementById('firstImg')
  images[1] = document.getElementById('secondImg')
  // images[2] = document.getElementById('thirdImg')
  // images[3] = document.getElementById('fourthImg')

  text = document.getElementById('text')

  // Javascriptで改行をbr,pタグに変換するツール(http://www.muzin.org/wp/javascript/javascriptreplace070605_29/)を改変したもの
  function textBreak (reportSentence) {
    var p = '</p><br><p>'
    reportSentence = '<p>\n' + reportSentence
    reportSentence = reportSentence.replace(/\r\n/g, '<br>')
    reportSentence = reportSentence.replace(/(\n|\r)/g, '<br>')
    reportSentence = reportSentence.replace(/(<br>){2,}/g, '\n' + p + '\n')
    reportSentence = reportSentence.replace(/<br>/g, '<br>\n')
    reportSentence += '</p>'
    reportSentence = reportSentence.replace(/<p>(\r\n|\n|\r}b)*<\/p>/g, '')
    reportSentence = reportSentence.replace(/<p>(\r\n|\n|\r}b)*<br>/g, '<p>')
    return reportSentence
  }

  document.getElementById('reflectButton').addEventListener('click', function () {
    document.getElementsByClassName('small')[0].textContent = `${baseInfo.year.value}年 ${baseInfo.season.value}シーズン第${baseInfo.playNumber.value}節`
    document.getElementsByClassName('big')[0].textContent = `${baseInfo.opponent.value}大学戦`
    document.getElementsByClassName('datePlace')[0].textContent = `${baseInfo.date.value}＠${baseInfo.location.value}`
    document.getElementsByTagName('td')[30].textContent = `${baseInfo.opponent.value}大`
    document.getElementsByTagName('td')[19].textContent = titPoints[0].value
    document.getElementsByTagName('td')[20].textContent = titPoints[1].value
    document.getElementsByTagName('td')[21].textContent = titPoints[2].value
    document.getElementsByTagName('td')[22].textContent = titPoints[3].value
    document.getElementsByTagName('td')[23].textContent = titPoints[4].value
    document.getElementsByTagName('td')[31].textContent = opponentPoints[0].value
    document.getElementsByTagName('td')[32].textContent = opponentPoints[1].value
    document.getElementsByTagName('td')[33].textContent = opponentPoints[2].value
    document.getElementsByTagName('td')[34].textContent = opponentPoints[3].value
    document.getElementsByTagName('td')[35].textContent = opponentPoints[4].value
    document.getElementById('img1').setAttribute('src', `https://www.titech-buffaloes.com${images[0].value}`)
    document.getElementById('img2').setAttribute('src', `https://www.titech-buffaloes.com${images[1].value}`)
    document.getElementById('preReport').innerHTML = textBreak(text.value)
  }, false)

  document.getElementById('makeButton').addEventListener('click', function () {
    document.getElementById('viewCode').textContent = `<link rel="stylesheet"href="/wp/wp-content/themes/titech_buffs/game_detail/game_detail.css"><div class="headLine"><div class="small">${baseInfo.year.value}年 ${baseInfo.season.value}シーズン第${baseInfo.playNumber.value}節</div><div class="big">${baseInfo.opponent.value}大学戦</div><img src="/wp/wp-content/themes/titech_buffs/images/blueBuffs.png"alt="buffs"class="buffsImg"></div><div><p class="subHeadLine">試合詳細</p></div><div><p class="datePlace">${baseInfo.date.value}＠${baseInfo.location.value}</p></div><table><tbody><tr><td class="dd">東工大</td><td>${titPoints[0].value}</td><td>${titPoints[1].value}</td><td>${titPoints[2].value}</td><td>${titPoints[3].value}</td><td class="total">${titPoints[4].value}</td></tr><tr class="center"><td class="dd"></td><td>1Q</td><td>2Q</td><td>3Q</td><td>4Q</td><td class="total">Total</td></tr><tr><td class="dd">${baseInfo.opponent.value}大</td><td>${opponentPoints[0].value}</td><td>${opponentPoints[1].value}</td><td>${opponentPoints[2].value}</td><td>${opponentPoints[3].value}</td><td class="total">${opponentPoints[4].value}</td></tr></tbody></table><img class="alignnone size-medium"src="${images[0].value}"alt=""width="48%"/><img class="alignnone size-medium"src="${images[1].value}"alt=""width="48%"/><div><p class="subHeadLine">試合レポート</p></div>${textBreak(text.value)}`
    document.getElementById('viewHTML').style.display = 'block'
  }, false)

  document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('viewHTML').style.display = 'none'
  }, false)
}, false)
