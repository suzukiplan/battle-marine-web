function wram_check_onStartGameOver() {
    return 0 != nes.cpu.mem[0x02] && 0 < nes.cpu.mem[0x6c] && nes.cpu.mem[0x6c] < 0x30;
}

function wram_check_getScore() {
    return 10 * (parseInt(nes.cpu.mem[0x66]) + parseInt(nes.cpu.mem[0x67]) * 256 + parseInt(nes.cpu.mem[0x68]) * 65536);
}

function wram_check_onEndGameOver() {
    return 0 == nes.cpu.mem[0x02];
}