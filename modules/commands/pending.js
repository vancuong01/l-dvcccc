var _0x4ec9 = ['. Tên : ', '76499OCKnkc', 'client', 'map', 'Quản lý tin nhắn chờ của bot', 'messageID', 'handleReply', 'exports', '\x0aHãy replay tin nhắn theo số thứ tự bên dưới để duyệt!', '\x0aID : ', '\x0a◆━━━━━━━━━━━━━◆\x0a', 'Kết nối thành công vui lòng sử dụng ', 'name', '🔰Hiện tại không có người dùng || nhóm nào cần duyệt !', '2OMEBDw', '🔮Đang có tổng: ', 'getCurrentUserID', 'Hệ thống admin-bot', 'senderID', 'push', 'menu để xem toàn bộ lệnh của bot <3', 'ID : ', 'filter', '169189yOwkVb', 'CatalizCS (Khánh Fix)', '37kUozbR', 'changeNickname', 'config', 'getThreadList', 'log', 'unsendMessage', 'threadID', 'PENDING', '. người dùng || nhóm đang trong tin nhắn chờ cần bạn duyệt\x0a\x0a', 'sendMessage', 'PREFIX', 'split', 'body', '212068ZYbyAc', '9sDAoOx', 'author', '178826cZBuTe', 'BotMilo <3', 'run', '71928kyFaGo', 'listid', '9111CRnaWy', '1RVcacG', '1qdEcoc', '1.0.2', 'BOTNAME', ' ] • ', 'OTHER', 'length', '18829OerwIE'];
var _0x2ce05f = _0x2edc;

function _0x2edc(_0x1d1241, _0xa0d2b1) {
    return _0x2edc = function (_0x4ec990, _0x2edc1a) {
        _0x4ec990 = _0x4ec990 - 0x160;
        var _0x2eab84 = _0x4ec9[_0x4ec990];
        return _0x2eab84;
    }, _0x2edc(_0x1d1241, _0xa0d2b1);
}(function (_0x37fa43, _0x3f8809) {
    var _0x51bd16 = _0x2edc;
    while (!![]) {
        try {
            var _0x4b21ea = -parseInt(_0x51bd16(0x178)) * -parseInt(_0x51bd16(0x169)) + parseInt(_0x51bd16(0x190)) * -parseInt(_0x51bd16(0x171)) + parseInt(_0x51bd16(0x16e)) * -parseInt(_0x51bd16(0x172)) + parseInt(_0x51bd16(0x16b)) + parseInt(_0x51bd16(0x187)) * parseInt(_0x51bd16(0x17a)) + parseInt(_0x51bd16(0x168)) + parseInt(_0x51bd16(0x170)) * -parseInt(_0x51bd16(0x192));
            if (_0x4b21ea === _0x3f8809) break;
            else _0x37fa43['push'](_0x37fa43['shift']());
        } catch (_0x4e2bcb) {
            _0x37fa43['push'](_0x37fa43['shift']());
        }
    }
}(_0x4ec9, 0x20fd9), module[_0x2ce05f(0x180)][_0x2ce05f(0x194)] = {
    'name': 'pending',
    'version': _0x2ce05f(0x173),
    'credits': _0x2ce05f(0x191),
    'hasPermssion': 0x2,
    'description': _0x2ce05f(0x17d),
    'commandCategory': _0x2ce05f(0x18a),
    'usages': '',
    'cooldowns': 0x5
}, module[_0x2ce05f(0x180)][_0x2ce05f(0x17f)] = async function ({
    api: _0x521ba7,
    event: _0x3df057,
    handleReply: _0xa32567
}) {
    var _0x179f3e = _0x2ce05f;
    if (_0xa32567[_0x179f3e(0x16a)] != _0x3df057[_0x179f3e(0x18b)]) return;
    var _0x4655f2 = _0x3df057[_0x179f3e(0x167)][_0x179f3e(0x166)](' '),
        _0x387659 = '',
        _0x305743 = _0x4655f2[_0x179f3e(0x17c)](_0x2e49f2 => parseInt(_0x2e49f2));
    for (let _0x4ff4cb of _0x305743) {
        _0x521ba7[_0x179f3e(0x193)]('[ ' + global[_0x179f3e(0x194)][_0x179f3e(0x165)] + _0x179f3e(0x175) + (!global[_0x179f3e(0x194)][_0x179f3e(0x174)] ? _0x179f3e(0x16c) : global['config'][_0x179f3e(0x174)]), _0xa32567[_0x179f3e(0x16f)][_0x4ff4cb - 0x1], _0x521ba7[_0x179f3e(0x189)]()), _0x521ba7[_0x179f3e(0x164)](_0x179f3e(0x184) + global[_0x179f3e(0x194)][_0x179f3e(0x165)] + _0x179f3e(0x18d), _0xa32567[_0x179f3e(0x16f)][_0x4ff4cb - 0x1]), _0x387659 += _0x179f3e(0x18e) + _0xa32567[_0x179f3e(0x16f)][_0x4ff4cb - 0x1] + _0x179f3e(0x183);
    }
    return _0x521ba7[_0x179f3e(0x160)](_0xa32567[_0x179f3e(0x17e)]), _0x521ba7[_0x179f3e(0x164)]('Đã duyệt thành công người dùng || nhóm : \x0a\x0a' + _0x387659, _0x3df057['threadID'], (_0x4adc2e, _0x1cbd35) => setTimeout(() => {
        var _0x27013c = _0x179f3e;
        _0x521ba7['unsendMessage'](_0x1cbd35[_0x27013c(0x17e)]);
    }, 0x2710));
}, module[_0x2ce05f(0x180)][_0x2ce05f(0x16d)] = async function ({
    api: _0x2fec7a,
    event: _0xea0ead
}) {
    var _0x29f469 = _0x2ce05f;
    try {
        var _0x2be60e = await _0x2fec7a[_0x29f469(0x195)](0x64, null, [_0x29f469(0x176)]),
            _0xd940ae = await _0x2fec7a[_0x29f469(0x195)](0x64, null, [_0x29f469(0x162)]);
    } catch (_0x5385ec) {
        console[_0x29f469(0x196)](_0x5385ec);
    }
    let _0x87527f = [..._0x2be60e, ..._0xd940ae][_0x29f469(0x18f)](_0x250f51 => _0x250f51['isSubscribed'] == !![]);
    var _0x5aa167 = '',
        _0x385db1 = 0x1,
        _0x3c6d06 = [];
    for (groupInfo of _0x87527f) {
        _0x5aa167 += _0x385db1++ + _0x29f469(0x179) + groupInfo[_0x29f469(0x185)] + _0x29f469(0x182) + groupInfo[_0x29f469(0x161)] + '\x0a', _0x3c6d06[_0x29f469(0x18c)](groupInfo[_0x29f469(0x161)]);
    }
    _0x5aa167 == '' ? _0x2fec7a['sendMessage'](_0x29f469(0x186), _0xea0ead[_0x29f469(0x161)], _0xea0ead['messageID']) : _0x2fec7a['sendMessage'](_0x29f469(0x188) + _0x87527f[_0x29f469(0x177)] + _0x29f469(0x163) + _0x5aa167 + _0x29f469(0x181), _0xea0ead[_0x29f469(0x161)], (_0x1ad60a, _0x36b1b0) => {
        var _0x1bc3e0 = _0x29f469;
        global[_0x1bc3e0(0x17b)][_0x1bc3e0(0x17f)]['push']({
            'name': this[_0x1bc3e0(0x194)]['name'],
            'messageID': _0x36b1b0['messageID'],
            'author': _0xea0ead[_0x1bc3e0(0x18b)],
            'listid': _0x3c6d06
        });
    });
});
