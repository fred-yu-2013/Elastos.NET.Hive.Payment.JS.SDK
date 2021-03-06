export class Config {
    static BRIDGE = 'https://walletconnect.elastos.net/v2';
    private static BASE_API = 'elastos.io';

    /** MainNet */
    static CONTRACT_URI = 'https://api.' + Config.BASE_API + '/eth';
    static CONTRACT_RPC = {20: Config.CONTRACT_URI}
    static HIVE_NODE_ADDRESS = '0x0E7EE480dE19E5BB766bD790774B315b02bfD4e1';

    /** TestNet */
    static CONTRACT_TEST_URI = 'https://api-testnet.' + Config.BASE_API + '/eth';
    static CONTRACT_TEST_RPC = {21: Config.CONTRACT_TEST_URI}
    static HIVE_NODE_TEST_ADDRESS = '0x2056451a53278f4Ef51663aA48dAea0BA0056BE8';
}
