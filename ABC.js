function testExact6ABCs(str) {
    const regex = /^[a-c]{6}$/;
    return regex.test(str);
}