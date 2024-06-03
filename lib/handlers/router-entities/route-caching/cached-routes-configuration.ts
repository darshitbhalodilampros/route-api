import { TradeType } from 'sdkcore18'
import { CacheMode, ChainId } from 'smartorderrouter18'
import { CachedRoutesStrategy } from './model/cached-routes-strategy'
import { PairTradeTypeChainId } from './model/pair-trade-type-chain-id'
import { CachedRoutesBucket } from './model/cached-routes-bucket'

/**
 * This is the main configuration for the caching strategies of routes.
 *
 * The keys are generated by calling the `toString` method in the `PairTradeTypeChainId` class,
 * this way we can guarantee the correct format of the key.
 *
 * The values are an object of type `CachedRoutesStrategy`.
 * which receive an array of `CachedRoutesParameters` with the configuration of the buckets.
 */
export const CACHED_ROUTES_CONFIGURATION: Map<string, CachedRoutesStrategy> = new Map([
  /**
   * WETH/USDC - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0x4200000000000000000000000000000000000006', // WETH mode
      tokenOut: '0x4Cc496ca61683944f20a1C4796761273EE74FB62', // USDC mode
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'WETH/USDC',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
      buckets: [
        new CachedRoutesBucket({ bucket: 0.2, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 1, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 3, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 5, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 8, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 13, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 21, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 34, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 55, cacheMode: CacheMode.Tapcompare }),
      ],
    }),
  ],
  /**
   * USDC/WETH - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0x4Cc496ca61683944f20a1C4796761273EE74FB62', // USDC mode
      tokenOut: '0x4200000000000000000000000000000000000006', // WETH mode
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'USDC/WETH',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
      buckets: [
        new CachedRoutesBucket({ bucket: 500, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 1_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 3_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 8_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 13_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 21_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 34_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 55_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 89_000, cacheMode: CacheMode.Tapcompare }),
      ],
    }),
  ],
  /**
   * WETH/USDT - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0x4200000000000000000000000000000000000006', // WETH mode
      tokenOut: '0x4E6E66560165771FE0E15435367f8318bA2748Ec', // USDT mode
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'WETH/USDT',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
      buckets: [
        new CachedRoutesBucket({ bucket: 0.2, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 1, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 3, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 5, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 8, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 13, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 21, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 34, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 55, cacheMode: CacheMode.Tapcompare }),
      ],
    }),
  ],
  /**
   * USDT/WETH - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0x4E6E66560165771FE0E15435367f8318bA2748Ec', // USDT mode
      tokenOut: '0x4200000000000000000000000000000000000006', // WETH mode
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'USDT/WETH',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
      buckets: [
        new CachedRoutesBucket({ bucket: 500, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 1_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 3_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 8_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 13_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 21_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 34_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 55_000, cacheMode: CacheMode.Tapcompare }),
        new CachedRoutesBucket({ bucket: 89_000, cacheMode: CacheMode.Tapcompare }),
      ],
    }),
  ],
  [
    new PairTradeTypeChainId({
      tokenIn: '0x4200000000000000000000000000000000000006', // WETH mode
      tokenOut: '*', // ANY TOKEN
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'WETH/*',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MODE,
      buckets: [
        new CachedRoutesBucket({ bucket: 0.0025, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 0.006, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 0.025, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 0.06, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 0.25, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 0.6, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 1, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 2, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 3, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 4, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 5, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 15 }),
      ],
    }),
  ],
])