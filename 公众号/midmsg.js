const awy = require('awy');
const parsexml = require('xml2js').parseString;

var ant = new awy();

var imageLog = new function() {
    var the = this;

    this.list = [];

    this.randImage = function() {
        if (the.list.length == 0) {
            return null;
        }
        var ind = Math.random() * 1024;
        ind = parseInt(ind % the.list.length);
        console.log(ind);
        return the.list[ ind ];
    };
};



//ant.config.daemon = true;

function formatTpl(data) {
    switch(data.msgtype) {
        case 'text':
            return `
                <xml>
                    <ToUserName><![CDATA[${data.touser}]]></ToUserName>
                    <FromUserName><![CDATA[${data.fromuser}]]></FromUserName>
                    <MsgType><![CDATA[text]]></MsgType>
                    <Content><![CDATA[${data.msg}]]></Content>
                    <CreateTime>${data.msgtime}</CreateTime>
                </xml>
            `;

        case 'image':
            return `
                <xml>
                    <ToUserName><![CDATA[${data.touser}]]></ToUserName>
                    <FromUserName><![CDATA[${data.fromuser}]]></FromUserName>
                    <MsgType><![CDATA[image]]></MsgType>
                    <Image>
                        <MediaId><![CDATA[${data.msg}]]></MediaId>
                    </Image>
                    <CreateTime>${data.msgtime}</CreateTime>
                </xml>
            `;
        
        case 'voice':
            return `
                <xml>
                    <ToUserName><![CDATA[${data.touser}]]></ToUserName>
                    <FromUserName><![CDATA[${data.fromuser}]]></FromUserName>
                    <MsgType><![CDATA[voice]]></MsgType>
                    <Voice>
                        <MediaId><![CDATA[${data.msg}]]></MediaId>
                    </Voice>
                    <CreateTime>${data.msgtime}</CreateTime>
                </xml>
            `;
        default: 
            return '';
    }
}

function userMsgHandle(wxmsg, retmsg) {
    if (wxmsg.MsgType === 'text') {
        switch (wxmsg.Content) {
            case 'help':
	    case '帮助':
	    case '？':
            case '?':
                retmsg.msgtype = 'text';
                retmsg.msg = '终于等到你~ 回复数字1-4我们为您提供对应的文章。1防晒 2早春穿搭 3健身饮食 4化妆';
                return formatTpl(retmsg);

            case '关于':
            case 'about':
                retmsg.msgtype = 'text';
                retmsg.msg = '在这里可以阅读关于美妆、穿搭、健身等相关的文章呦~';
                return formatTpl(retmsg);
            case 'image':
                var img = imageLog.randImage();
                if (img === null) {
                    retmsg.msgtype = 'text';
                    retmsg.msg = '没有图片';
                } else {
                    retmsg.msgtype = 'image';
                    retmsg.msg = img;
                }
                return formatTpl(retmsg);

	    case '1':
		retmsg.msgtype = 'text';
		retmsg.msg = '除了诗和远方，还要带上防晒霜! '+ `<a href='https://mp.weixin.qq.com/s?__biz=Mzg5ODExMjI2OQ==&tempkey=MTAxMF9GbzRvTGF3TURKRUZnU2dZOUExc2p6S1J6STl0Mk5vSVQ3Y0E5SXRFXzk1SXNSV3l3V2hIcS1kWkJJazFXb2ViN0sta0F5b3Y3MjE2M2FxaWczVUpkM21aLXhvSFI0YmRiV2lXTFlQZ3RzUVotZjgwNktYa28yMTBXYXY2OXB2ZkdSbVV2S1ZKT1A0VkJBYldMYm1IZ01FNUYwb01FLVMyYWVjVjlnfn4%3D&chksm=4066cf7e7711466887b4afec6953694ab089188af583dbc89ac061e82499c6ce0186e2f1c671#rd'>点击这里</a>`;
		return formatTpl(retmsg);
	    case '2':
		retmsg.msgtype = 'text';
		retmsg.msg = '2019早春这么穿，简直时尚又减龄 '+ `<a href='https://mp.weixin.qq.com/s?__biz=Mzg5ODExMjI2OQ==&tempkey=MTAxMF9HS21VcGVGbEozZDhNTytCOUExc2p6S1J6STl0Mk5vSVQ3Y0E5SXRFXzk1SXNSV3l3V2hIcS1kWkJJbUxBNk14WjEyTFhJR2lCZTlad01FWEV4cm0wM1FqemltWXZSYzF3dEhxb19nVmt6MjQ4OGEzclFXckl3RHZwTHJvVU5IUHRfR2hMNllKNmRLb3pLcFh1WFJoak9ZQzNyNU1kbC11dkhQVzlnfn4%3D&chksm=4066cf457711465361f9a59755b8e89dfc9f37cacbd5e4c5be0f558c44e6051a666bc9c72469#rd'>点击这里</a>`;
		return formatTpl(retmsg);
	    case '3':
		retmsg.msgtype = 'text';
		retmsg.msg = '健身饮食吃什么好 '+ `<a href='https://mp.weixin.qq.com/s?__biz=Mzg5ODExMjI2OQ==&tempkey=MTAxMF9rbytpdHQzTEtmY0FlTDg5OUExc2p6S1J6STl0Mk5vSVQ3Y0E5SXRFXzk1SXNSV3l3V2hIcS1kWkJJa3lEMGY1aGlBa25ZT2ZXclAxVHY0VE90a2pxTF9FUG1UR0xrZzNSbGVGeDlLQWZ0YzhQeHdJS2NQTENmcHh1Y0htRWFBSHZWQl8zdldpaF8zLXZ2RVFwRnVHRHRfeUFSdDVmOTYxcXczLUhBfn4%3D&chksm=4066cf4a7711465c4fc0ac9c54319be10e1dffb76d171339cd99dcfafceec87842457375164a#rd'>点击这里</a>`;
		return formatTpl(retmsg);
	    case '4':
		retmsg.msgtype = 'text';
		retmsg.msg = '别哭抱抱，从现在开始不再做化妆小白~ '+ `<a href='https://mp.weixin.qq.com/s?__biz=Mzg5ODExMjI2OQ==&tempkey=MTAxMF91WXA5ejZmWFdYbkRVQ3JZOUExc2p6S1J6STl0Mk5vSVQ3Y0E5SXRFXzk1SXNSV3l3V2hIcS1kWkJJbUhHM0FMeHJGSjhNWXpMU044Q0ZDbUtvRUpydlRMNlV6UHV4RE9PQ083SW9Gb2JiblJMVjJ5eTJJU3hzaDA4QnhjMFV3dGp0YjEwMkpieC1NY05KVlNjaW5oQlg4T0dqR3dhdnc3ZDBwcThBfn4%3D&chksm=4066cf497711465f14914408389f8969358cf09d11ab374ee44cc9420b0953a220108c07274e#rd'>点击这里</a>`;
		return formatTpl(retmsg);


            default:;
        }
    }

    switch(wxmsg.MsgType) {
        case 'text':
            retmsg.msg = wxmsg.Content;
            break;
        case 'image':
            retmsg.msg = wxmsg.MediaId;
            break;
        case 'voice':
            retmsg.msg = wxmsg.MediaId;
            break;

        default:
            retmsg.msg = '终于等到你~ 回复数字1-4我们为您提供对应的文章。1防晒 2早春穿搭 3健身饮食 4化妆 ';
            retmsg.msgtype = 'text';
    }
    if (retmsg.msgtype === '') {
        retmsg.msgtype = wxmsg.MsgType;
    }
    return formatTpl(retmsg);
}


ant.add(async (rr, next) => {
    if (rr.weixinMsg.wxmsg.MsgType == 'image') {
        imageLog.list.push(rr.weixinMsg.wxmsg.MediaId);
    }
    await next(rr);
}, '/wx/talk');

ant.add(async (rr, next) => {
    
    await new Promise((rv, rj) => {
        parsexml(rr.req.GetBody(), {explicitArray : false}, (err, result) => {
            if (err) {
                rr.res.Body = '';
                rj(err);
            } else {
                var xmlmsg = result.xml;

                var data = {
                    touser      : xmlmsg.FromUserName,
                    fromuser    : xmlmsg.ToUserName,
                    msg         : '',
                    msgtime     : parseInt((new Date()).getTime() / 1000),
                    msgtype     : ''
                };

                rv({
                    wxmsg : xmlmsg,
                    retmsg : data
                });
            }
        });
    }).then((data) => {
        rr.weixinMsg = data;
    }, err=> {
        throw err;
    }).catch(err => {
        console.log(err);
    });

    await next(rr);

}, '/wx/talk');

ant.post('/wx/talk', async rr => {
    
    console.log(rr.req.GetBody());
    
    if (rr.weixinMsg !== undefined) {
        rr.res.Body = userMsgHandle(
                        rr.weixinMsg.wxmsg,
                        rr.weixinMsg.retmsg
                      );
    } else {
        rr.res.Body = '';
    }

});

ant.run('localhost', 8000);