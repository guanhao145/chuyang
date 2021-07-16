
var _ga = {
    'url': '',
    'params': {
        'r': document.referrer,
        'sw': window.screen.width,
        'sh': window.screen.height,
        'h': window.location.href
    },
    'getRequest': function () {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = {};
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    'getOS': function (ua) {
        if (typeof(ua) === "undefined") {
            ua = navigator.userAgent.toLowerCase();
        } else {
            ua = ua.toLowerCase();
        }

        if (navigator.platform === 'Win32' || navigator.platform === 'Win64' || navigator.platform === 'Windows') {
            if (ua.indexOf('windows nt 5.0') > -1 || ua.indexOf('windows 2000') > -1) return 'win2000';
            if (ua.indexOf('windows nt 5.1') > -1 || ua.indexOf('windows xp') > -1) return 'xp';
            if (ua.indexOf('windows nt 5.2') > -1 || ua.indexOf('windows 2003') > -1) return 'win2003';
            if (ua.indexOf('windows nt 6.0') > -1 || ua.indexOf('windows vista') > -1) return 'vista';
            if (ua.indexOf('windows nt 6.1') > -1 || ua.indexOf('windows 7') > -1) return 'win7';
            if (ua.indexOf('windows nt 6.2') > -1 || ua.indexOf('windows 8') > -1) return 'win8';
            if (ua.indexOf('windows nt 6.3') > -1) return 'win8.1';
            if (ua.indexOf('windows nt 6.4') > -1) return 'win10';
            if (ua.indexOf('windows nt 10.0') > -1) return 'win10';
            if (ua.match(/windows ce/i) == 'windows ce') return 'wince';
            if (ua.match(/windows mobile/i) == 'windows mobile') return 'winmobile';
            if (ua.match(/windows phone/i) == 'windows phone') return 'windows phone';
            return 'win*';
        }

        if (navigator.platform.indexOf('Linux') > -1) {
            if (ua.match(/android/i) == 'android') return 'android';
            return 'linux';
        }

        if (ua.match(/ipad/i) == 'ipad') return 'ipad';
        if (ua.match(/iphone os/i) == 'iphone os') return 'iphone';

        if (ua.match(/windows ce/i) == 'windows ce') return 'wince';
        if (ua.match(/windows mobile/i) == 'windows mobile') return 'winmobile';

        if (navigator.platform === 'Mac68K' || navigator.platform === 'MacPPC' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel') return 'mac';

        if (navigator.platform === 'X11') return 'unix';

        return 'other';
    },
    'getBrowser': function (ua) {
        if (typeof(ua) === "undefined") {
            ua = navigator.userAgent;
        }
        var b, s;

        if (s = ua.match(/MicroMessenger\/([\.\w]+)/i)) {
            s = ['MicroMessenger', s[1]];
        } else if (s = ua.match(/MQQBrowser\/([\d\.]+)/i)) {
            s = ['MQQBrowser', s[1]];
        } else if (s = ua.match(/QQBrowser\/([\d\.]+)/i)) {
            s = ['QQBrowser', s[1]];
        } else if (s = ua.match(/QQ\/([\d\.]+)/i)) {
            s = ['QQ', s[1]];
        } else if (s = ua.match(/Qzone\/([\w_\.]+)/i)) {
            s = ['Qzone', s[1]];
        } else if (s = ua.match(/TaoBrowser\/([\d\.]+)/i)) {
            s = ['Tao', s[1]];
        } else if (s = ua.match(/BIDUBrowser\/([\w\.]+)/i)) {
            s = ['BaiDu', s[1]];
        } else if (s = ua.match(/LBBROWSER/i)) {
            s = ['LBBROWSER', ''];
        } else if (s = ua.match(/Maxthon[\/ ]([\d\.]+)/i)) {
            s = ['Maxthon', s[1]];
        } else if (s = ua.match(/UCBrowser\/([\d\.]+)/i)) {
            s = ['UCBrowser', s[1]];
        } else if (s = ua.match(/XiaoMi\/MiuiBrowser\/([\d\.]+)/i)) {
            s = ['XiaoMi/MiuiBrowser', s[1]];
        } else if (s = ua.match(/SE ([\w\.]+) MetaSr 1.0/i)) {
            s = ['Sougou', s[1]];
        } else if (s = ua.match(/SogouMobileBrowser\/([\d\.]+)/i)) {
            s = ['SogouMobileBrowser', s[1]];
        } else if (s = ua.match(/TheWorld ([\d\.]+)/i)) {
            s = ['TheWorld', s[1]];
        } else if (s = ua.match(/TheWorld/i)) {
            s = ['TheWorld', ''];
        } else if (s = ua.match(/2345Explorer ([\d\.]+)/i)) {
            s = ['2345Explorer', s[1]];
        } else if (s = ua.match(/UBrowser\/([\d\.]+)/i)) {
            s = ['UBrowser', s[1]];
        } else if (s = ua.match(/360SE/i)) {
            s = ['360SE', ''];
        } else if (s = ua.match(/baiduboxapp\/([\w\._]+)/i)) {
            s = ['baiduboxapp', s[1]];
        } else if (s = ua.match(/samsungbrowser\/([\d\.]+)/i)) {
            s = ['samsungbrowser', s[1]];
        } else {
            s = ['', ''];
        }

        if (b = ua.match(/rv:([\d\.]+).*\) like gecko/i)) return ['IE', b[1], s[0], s[1]];//IE11
        if (b = ua.match(/Edge\/([\d\.]+)/i)) return ['Edge', b[1], s[0], s[1]];//win10自带浏览器
        if (b = ua.match(/MSIE ([\d\.]+)/i)) return ['IE', b[1], s[0], s[1]];

        if (b = ua.match(/Firefox\/([\d\.]+)/i)) return ['Firefox', b[1], s[0], s[1]];
        if (b = ua.match(/Chrome\/([\d\.]+)/i)) return ['Chrome', b[1], s[0], s[1]];
        if (b = ua.match(/Opera.([\d\.]+)/i)) return ['Opera', b[1], s[0], s[1]];
        if (b = ua.match(/Safari\/([\d\.]+)/i)) return ['Safari', b[1], s[0], s[1]];
        if (b = ua.match(/ucbrowser\/([\d\.]+)/i)) return ['UCBrowser', b[1], s[0], s[1]];
        if (b = ua.match(/applewebkit\/([\d\.]+)/i)) return ['AppleWebkit', b[1], s[0], s[1]];
        if (b = ua.match(/baiduspider-render\/([\d\.]+)/i)) return ['BaiduSpiderRender', b[1], s[0], s[1]];

        return ['other', '', s[0], s[1]];
    },
    'getCookie': function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    'getSearchEngine': function () {
        var refer = document.referrer; //搜索来源页
        var sosuo = refer.split(".")[1];
        var grep = null;
        var str = null;
        var keyword = null;
        switch (sosuo) {
            case "baidu":
                grep = /wd\=.*\&/i;
                str = refer.match(grep);
                keyword = str.toString().split("=")[1].split("&")[0];
                break;
            case "google":
                grep = /q\=.*\&/i;
                str = refer.match(grep);
                keyword = str.toString().split("=")[1].split("&")[0];
                break;
            case "sogou":
                grep = /query\=.*\&/i;
                str = refer.match(grep);
                keyword = str.toString().split("=")[1].split("&")[0];
                break;
            case "bing":
                grep = /q\=.*\&/i;
                str = refer.match(grep);
                keyword = str.toString().split("=")[1].split("&")[0];
                break;
            case "yahoo":
                grep = /p\=.*\&/i;
                str = refer.match(grep);
                keyword = str.toString().split("=")[1].split("&")[0];
                break;
            case "soso":
                grep = /query\=.*\&/i;
                str = refer.match(grep);
                keyword = str.toString().split("=")[1].split("&")[0];
                break;
            case "so":
                grep = /q\=.*\&/i;
                str = refer.match(grep);
                keyword = str.toString().split("=")[1].split("&")[0];
                break;
            default:
                sosuo = '无';
                keyword = '无';
        }
        return [sosuo, keyword];
    },
    'getDeviceType': function () {
        //特殊程序（小程序、熊掌号等）
        var browser = this.getBrowser();
        if (browser[2] === 'MicroMessenger') {
            return 'wechat';
        }
        
        //根据操作系统判断
        var os = this.getOS();
        if (os === 'ipad' || os === 'iphone') {
            //ipad，iphone视为手机访问
            return 'ios';
        } else if (os === 'android') {
            return 'android';
        }
        
        //默认为PC访问
        return 'pc';
    },
    'getUUID': function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    'init': function (si) {
        if (!_ga.url) {
            return false;
        }
        var start = new Date();
        _ga.params['st'] = start.getTime();
        _ga.params['t'] = _ga.getRequest()['trackid'] ? _ga.getRequest()['trackid'] : '';
        _ga.params['os'] = _ga.getOS();
        _ga.params['si'] = si ? si : 0;
        var browser = _ga.getBrowser();
        _ga.params['b'] = browser[0];
        _ga.params['bv'] = browser[1];
        _ga.params['s'] = browser[2];
        _ga.params['sv'] = browser[3];
        _ga.params['sk'] = JSON.stringify(_ga.getRequest());
        _ga.params['se'] = _ga.getSearchEngine()[0];
        _ga.params['sek'] = _ga.getSearchEngine()[1];
        _ga.params['ua'] = navigator.userAgent.toLowerCase();
        _ga.params['dt'] = _ga.getDeviceType();
        _ga.params['uq'] = start.getFullYear().toString() + start.getMonth().toString() + start.getDay().toString() + start.getHours().toString() + start.getMinutes().toString() + start.getSeconds().toString() + start.getMilliseconds().toString() + Math.floor(Math.random()*100).toString();
        // 存用户身份(UUID)
        var cid = localStorage.getItem('cidKey') || false;
        var cookieFlag = document.cookie.indexOf('gmac')
        if (!cid||(cookieFlag===-1)) {
          cid = _ga.getUUID();
          localStorage.setItem('cidKey', cid);
          document.cookie="gmac="+cid;  
        }
        _ga.params['gmac'] = cid
        var img = document.createElement("img");
        var params = [];
        for (key in _ga.params) {
            params.push(key + '=' + encodeURIComponent(_ga.params[key]))
        }
        img.src = [_ga.url, '?', params.join('&')].join('');
        img.style.display = 'none';
        document.body.insertBefore(img, document.body.childNodes[0]);
    }
};