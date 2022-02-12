export const FACTORY_ADDRESS = '0x60c48b5232a43306c16d492cf1562c7398518170'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/RS-Finance/assets/main/v2/ksfswaptokenlist.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76',
  '0x93b2fff814fcaeffb01406e80b4ecd89ca6a021b',
  `0xfc56a7e70f6c970538020cc39939929b4d393f1f`,
  `0xf55b86c19b012e4798dc508c3ec256a150c36967`,
  `0xf55af137a98607f7ed2efefa4cd2dfe70e4253b1`, // ETH
  `0xea54f38fffe79d92e9b56abafbcdbb6a14edaf5c`,
  `0xe67ffceb40f263942a6ded6f12e7f525540f5a1f`,
  `0xe62d5575e2f8b9ad740aa837ef80dc79c8d0d0a9`,
  `0xde13c687daff63cb90c8d39574d84ef2ff4a2632`,
  `0xdb53f7af2a84482684b6c73a93e47abc61afd081`,
  `0xd69d0ff0cbc74fe5609847dec09d2700dea18884`,
  `0xd688439c6b11396e6d8943a2e99a70c35a46cba0`,
  `0xd4b52510719c594514ce7fed6cc876c03278ccf8`,
  `0xc73f3ca99ea08273b56d9df93dc7c4a8b783e8d5`,
  `0xc0ffee0000921eb8dd7d506d4de8d5b79b856157`,
  `0xbd451b952de19f2c7ba2c8c516b0740484e953b2`,
  `0xb8b5d8be40c69cdbac491200422089051ab79c72`,
  `0xb16437ca0e7edafe7c59847196438e6153426992`,
  `0xb08c09037ba71bfe1cc4deba79524ffd250d2a1b`,
  `0x904257e308ed31144a743beb7b46f304f4a7a79e`,
  `0x8d4a0b8ef301bb8730d7d5120213f6cbbf416e3f`,
  `0x8c5ce6129372bd55e03d74831bda9dd4ff40bd62`,
  `0x851f5df9c20359e8d35b7ec1d877dd9ce03f7c4c`,
  `0x80a457612c593269397f5516bd555a5a384d3f7d`,
  `0x7d6d0aa59fcab13140604dc122bf310bd72c00a1`,
  `0x75f6ec59dbdfdade9ba5af7e3b5b8e8cd8088abf`,
  `0x73b6086955c820370a18002f60e9b51fb67d7e1a`,
  `0x721a1b93703157fd22fea979bab34247934e3678`,
  `0x6cc60728ed9992ac28ed5da71d23383cb94cfaae`,
  `0x6c34b9b79ae30822973edd4dd424cc1bacbe3296`,
  `0x6c1b568a1d7fb33de6707238803f8821e9472539`,
  `0x6703ec49892ab1ee8ba2bd48bab208d3f9a0c7d8`,
  `0x6665d66afa48f527d86623723342cfa258cb8666`,
  `0x627f63299d9df3d4e22132932da577bb08ca0988`,
  `0x5053e89300125b66dd54f3f82f096c4e6d5f8fc5`,
  `0x4fb5394cf361ec2beea5d67c76cbafa4ebee0ab4`,
  `0x4c9fa6297d3413fbbe7ba935e14022d0e5a39dc7`,
  `0x4abc52243fa1e7bfa3102cb89739f2c3d435bf85`,
  `0x4a81704d8c16d9fb0d7f61b747d0b5a272badf14`,
  `0x47841910329aaa6b88d5e9dcde9000195151dc72`,
  `0x40dce267ac23565a6c3f174655ca9b35e49604ed`,
  `0x3da37af200070563882d0d314a622311f4aae6ac`,
  `0x3977cc44c05873edba8039a90b85027a56f0dca1`,
  `0x362e29982263ea8f582cede99ea530a82b42c0ee`,
  `0x35b306ce024c428a182d82ebffd6a89f83b6060e`,
  `0x356e5caa789861dd3b40397a033762e0feeab177`,
  `0x34892927ef90e305b644368942c5bc75243531b9`,
  `0x3341a4cc481637a773187400227446f85f66da0a`,
  `0x2d8c1f4a91a5722c0a648060cdae7c66eb0ff557`,
  `0x2d32e1afea38c0d62afea2b931711c411a35dadf`,
  `0x27bdc825ae309ce36b1931534ecf6de23f484a28`,
  `0x27a9bdd0caf4ea0ac5a3b7cb231bdad023d8d71c`,
  `0x258e78df1f9235025294b29feabdffa18fb5138e`,
  `0x2555eb726b035d34769a8d63235783d29ca45083`,
  `0x22e9331d8b9b42bf92801005a69bed793e9f686e`,
  `0x218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0`,
  `0x1b465775469c71b898bb51b53b2d4464b7cd3448`,
  `0x1aaaf8d0588a14f54ed3624f96205989df091181`,
  `0x192f72efd1009d90b0e6f82ff27a0a2389f803e5`,
  `0x141b987f067db2745402a07de8d1e471fc48c4aa`,
  `0x1305945139cab150e06379a5564b38ca089e8ae1`,
  `0x04ec68d9280a1c6038ad2397aac6415de70f2640`,
  `0x02d757585a5e2ae5c4ad0583f120e54eeb4b1d7e`,
  `0x00876418ebace35ab779060b14c91442881d408a`,


  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
  '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
  '0x1acba73121d5f63d8ea40bdc64edb594bd88ed09',
  '0x7d7e813082ef6c143277c71786e5be626ec77b20',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USDT values may be inaccurate without liquid stablecoin or KCS pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [
  '0x24806dc6bfe905292093e095d7d7045d8ca20698',
  '0xc4993ce08e2e5aef24ac1c4342716700f419e362',
  '0x8879c7440ec4c83260be9481f87d305b91a6ae22',
  '0x3d8b958d12210ad07e8a47313342f175e3f1719b',
  `0x27cf7a644fe5b7b4c0a35d258c88b42a9f80d101`,
  `0xd1986c80cac4dd55add6c4b30d19b4b0189ccacd`,
]
