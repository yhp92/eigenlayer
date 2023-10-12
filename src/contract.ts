

import {
  Deposit as DepositEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  PauserRegistrySet as PauserRegistrySetEvent,
  ShareWithdrawalQueued as ShareWithdrawalQueuedEvent,
  StrategyAddedToDepositWhitelist as StrategyAddedToDepositWhitelistEvent,
  StrategyRemovedFromDepositWhitelist as StrategyRemovedFromDepositWhitelistEvent,
  StrategyWhitelisterChanged as StrategyWhitelisterChangedEvent,
  Unpaused as UnpausedEvent,
  WithdrawalCompleted as WithdrawalCompletedEvent,
  WithdrawalDelayBlocksSet as WithdrawalDelayBlocksSetEvent,
  WithdrawalQueued as WithdrawalQueuedEvent
} from "../generated/Contract/Contract"
import {
  Deposit,
  Initialized,
  OwnershipTransferred,
  Paused,
  PauserRegistrySet,
  ShareWithdrawalQueued,
  StrategyAddedToDepositWhitelist,
  StrategyRemovedFromDepositWhitelist,
  StrategyWhitelisterChanged,
  Unpaused,
  WithdrawalCompleted,
  WithdrawalDelayBlocksSet,
  WithdrawalQueued
} from "../generated/schema"


import {IERC20} from '../generated/Contract/IERC20'

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.token = event.params.token
  entity.strategy = event.params.strategy
  entity.shares = event.params.shares
  
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash


  let contract = IERC20.bind(event.params.token)
  let name = contract.try_name()
  if (!name.reverted) {
    entity.name = name.value
  }

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.newPausedStatus = event.params.newPausedStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePauserRegistrySet(event: PauserRegistrySetEvent): void {
  let entity = new PauserRegistrySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pauserRegistry = event.params.pauserRegistry
  entity.newPauserRegistry = event.params.newPauserRegistry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleShareWithdrawalQueued(
  event: ShareWithdrawalQueuedEvent
): void {
  let entity = new ShareWithdrawalQueued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.nonce = event.params.nonce
  entity.strategy = event.params.strategy
  entity.shares = event.params.shares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStrategyAddedToDepositWhitelist(
  event: StrategyAddedToDepositWhitelistEvent
): void {
  let entity = new StrategyAddedToDepositWhitelist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strategy = event.params.strategy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStrategyRemovedFromDepositWhitelist(
  event: StrategyRemovedFromDepositWhitelistEvent
): void {
  let entity = new StrategyRemovedFromDepositWhitelist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strategy = event.params.strategy

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStrategyWhitelisterChanged(
  event: StrategyWhitelisterChangedEvent
): void {
  let entity = new StrategyWhitelisterChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAddress = event.params.previousAddress
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.newPausedStatus = event.params.newPausedStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalCompleted(
  event: WithdrawalCompletedEvent
): void {
  let entity = new WithdrawalCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.nonce = event.params.nonce
  entity.withdrawer = event.params.withdrawer
  entity.withdrawalRoot = event.params.withdrawalRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalDelayBlocksSet(
  event: WithdrawalDelayBlocksSetEvent
): void {
  let entity = new WithdrawalDelayBlocksSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousValue = event.params.previousValue
  entity.newValue = event.params.newValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalQueued(event: WithdrawalQueuedEvent): void {
  let entity = new WithdrawalQueued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.nonce = event.params.nonce
  entity.withdrawer = event.params.withdrawer
  entity.delegatedAddress = event.params.delegatedAddress
  entity.withdrawalRoot = event.params.withdrawalRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
