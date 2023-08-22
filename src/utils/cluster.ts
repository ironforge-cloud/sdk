export const MAINNET = 'mainnet'
export const DEVNET = 'devnet'
export const TESTNET = 'testnet'

export const Clusters = [MAINNET, DEVNET, TESTNET] as const
export type Cluster = (typeof Clusters)[number]

export function isValidCluster(cluster?: string): cluster is Cluster {
  return cluster != null && Clusters.includes(cluster as Cluster)
}
