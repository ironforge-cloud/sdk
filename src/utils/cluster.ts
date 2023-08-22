/** mainnet cluster */
export const MAINNET = 'mainnet'
/** devnet cluster */
export const DEVNET = 'devnet'
/** testnet cluster */
export const TESTNET = 'testnet'

/** All available clusters. */
export const Clusters = [MAINNET, DEVNET, TESTNET] as const

/** Cluster */
export type Cluster = (typeof Clusters)[number]

/** Checks if the given cluster is valid. */
export function isValidCluster(cluster?: string): cluster is Cluster {
  return cluster != null && Clusters.includes(cluster as Cluster)
}
