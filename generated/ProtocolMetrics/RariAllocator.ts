// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  BigInt,
  Bytes,
  Entity,
  ethereum,
  JSONValue,
  TypedMap} from "@graphprotocol/graph-ts";

export class AllocatorActivated extends ethereum.Event {
  get params(): AllocatorActivated__Params {
    return new AllocatorActivated__Params(this);
  }
}

export class AllocatorActivated__Params {
  _event: AllocatorActivated;

  constructor(event: AllocatorActivated) {
    this._event = event;
  }
}

export class AllocatorDeactivated extends ethereum.Event {
  get params(): AllocatorDeactivated__Params {
    return new AllocatorDeactivated__Params(this);
  }
}

export class AllocatorDeactivated__Params {
  _event: AllocatorDeactivated;

  constructor(event: AllocatorDeactivated) {
    this._event = event;
  }

  get panic(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class AllocatorDeployed extends ethereum.Event {
  get params(): AllocatorDeployed__Params {
    return new AllocatorDeployed__Params(this);
  }
}

export class AllocatorDeployed__Params {
  _event: AllocatorDeployed;

  constructor(event: AllocatorDeployed) {
    this._event = event;
  }

  get authority(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get extender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AuthorityUpdated extends ethereum.Event {
  get params(): AuthorityUpdated__Params {
    return new AuthorityUpdated__Params(this);
  }
}

export class AuthorityUpdated__Params {
  _event: AuthorityUpdated;

  constructor(event: AuthorityUpdated) {
    this._event = event;
  }

  get authority(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EtherReceived extends ethereum.Event {
  get params(): EtherReceived__Params {
    return new EtherReceived__Params(this);
  }
}

export class EtherReceived__Params {
  _event: EtherReceived;

  constructor(event: EtherReceived) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LossLimitViolated extends ethereum.Event {
  get params(): LossLimitViolated__Params {
    return new LossLimitViolated__Params(this);
  }
}

export class LossLimitViolated__Params {
  _event: LossLimitViolated;

  constructor(event: LossLimitViolated) {
    this._event = event;
  }

  get lastLoss(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get dloss(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get estimatedTotalAllocated(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MigrationExecuted extends ethereum.Event {
  get params(): MigrationExecuted__Params {
    return new MigrationExecuted__Params(this);
  }
}

export class MigrationExecuted__Params {
  _event: MigrationExecuted;

  constructor(event: MigrationExecuted) {
    this._event = event;
  }

  get allocator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RariAllocator extends ethereum.SmartContract {
  static bind(address: Address): RariAllocator {
    return new RariAllocator("RariAllocator", address);
  }

  amountAllocated(id: BigInt): BigInt {
    const result = super.call(
      "amountAllocated",
      "amountAllocated(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBigInt();
  }

  try_amountAllocated(id: BigInt): ethereum.CallResult<BigInt> {
    const result = super.tryCall(
      "amountAllocated",
      "amountAllocated(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  authority(): Address {
    const result = super.call("authority", "authority():(address)", []);

    return result[0].toAddress();
  }

  try_authority(): ethereum.CallResult<Address> {
    const result = super.tryCall("authority", "authority():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  extender(): Address {
    const result = super.call("extender", "extender():(address)", []);

    return result[0].toAddress();
  }

  try_extender(): ethereum.CallResult<Address> {
    const result = super.tryCall("extender", "extender():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ids(): Array<BigInt> {
    const result = super.call("ids", "ids():(uint256[])", []);

    return result[0].toBigIntArray();
  }

  try_ids(): ethereum.CallResult<Array<BigInt>> {
    const result = super.tryCall("ids", "ids():(uint256[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  name(): string {
    const result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    const result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  rewardTokens(): Array<Address> {
    const result = super.call("rewardTokens", "rewardTokens():(address[])", []);

    return result[0].toAddressArray();
  }

  try_rewardTokens(): ethereum.CallResult<Array<Address>> {
    const result = super.tryCall(
      "rewardTokens",
      "rewardTokens():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  status(): i32 {
    const result = super.call("status", "status():(uint8)", []);

    return result[0].toI32();
  }

  try_status(): ethereum.CallResult<i32> {
    const result = super.tryCall("status", "status():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  tokenIds(param0: BigInt): BigInt {
    const result = super.call("tokenIds", "tokenIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tokenIds(param0: BigInt): ethereum.CallResult<BigInt> {
    const result = super.tryCall("tokenIds", "tokenIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokens(): Array<Address> {
    const result = super.call("tokens", "tokens():(address[])", []);

    return result[0].toAddressArray();
  }

  try_tokens(): ethereum.CallResult<Array<Address>> {
    const result = super.tryCall("tokens", "tokens():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  treasury(): Address {
    const result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    const result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  utilityTokens(): Array<Address> {
    const result = super.call("utilityTokens", "utilityTokens():(address[])", []);

    return result[0].toAddressArray();
  }

  try_utilityTokens(): ethereum.CallResult<Array<Address>> {
    const result = super.tryCall(
      "utilityTokens",
      "utilityTokens():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  version(): string {
    const result = super.call("version", "version():(string)", []);

    return result[0].toString();
  }

  try_version(): ethereum.CallResult<string> {
    const result = super.tryCall("version", "version():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    const value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get fuseData(): ConstructorCallFuseDataStruct {
    return changetype<ConstructorCallFuseDataStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCallFuseDataStruct extends ethereum.Tuple {
  get base(): ConstructorCallFuseDataBaseStruct {
    return changetype<ConstructorCallFuseDataBaseStruct>(this[0].toTuple());
  }

  get spec(): ConstructorCallFuseDataSpecStruct {
    return changetype<ConstructorCallFuseDataSpecStruct>(this[1].toTuple());
  }
}

export class ConstructorCallFuseDataBaseStruct extends ethereum.Tuple {
  get authority(): Address {
    return this[0].toAddress();
  }

  get extender(): Address {
    return this[1].toAddress();
  }

  get tokens(): Array<Address> {
    return this[2].toAddressArray();
  }
}

export class ConstructorCallFuseDataSpecStruct extends ethereum.Tuple {
  get treasury(): Address {
    return this[0].toAddress();
  }

  get rewards(): Address {
    return this[1].toAddress();
  }
}

export class ActivateCall extends ethereum.Call {
  get inputs(): ActivateCall__Inputs {
    return new ActivateCall__Inputs(this);
  }

  get outputs(): ActivateCall__Outputs {
    return new ActivateCall__Outputs(this);
  }
}

export class ActivateCall__Inputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }
}

export class ActivateCall__Outputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }
}

export class AddIdCall extends ethereum.Call {
  get inputs(): AddIdCall__Inputs {
    return new AddIdCall__Inputs(this);
  }

  get outputs(): AddIdCall__Outputs {
    return new AddIdCall__Outputs(this);
  }
}

export class AddIdCall__Inputs {
  _call: AddIdCall;

  constructor(call: AddIdCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddIdCall__Outputs {
  _call: AddIdCall;

  constructor(call: AddIdCall) {
    this._call = call;
  }
}

export class DeactivateCall extends ethereum.Call {
  get inputs(): DeactivateCall__Inputs {
    return new DeactivateCall__Inputs(this);
  }

  get outputs(): DeactivateCall__Outputs {
    return new DeactivateCall__Outputs(this);
  }
}

export class DeactivateCall__Inputs {
  _call: DeactivateCall;

  constructor(call: DeactivateCall) {
    this._call = call;
  }

  get panic(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class DeactivateCall__Outputs {
  _call: DeactivateCall;

  constructor(call: DeactivateCall) {
    this._call = call;
  }
}

export class DeallocateCall extends ethereum.Call {
  get inputs(): DeallocateCall__Inputs {
    return new DeallocateCall__Inputs(this);
  }

  get outputs(): DeallocateCall__Outputs {
    return new DeallocateCall__Outputs(this);
  }
}

export class DeallocateCall__Inputs {
  _call: DeallocateCall;

  constructor(call: DeallocateCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class DeallocateCall__Outputs {
  _call: DeallocateCall;

  constructor(call: DeallocateCall) {
    this._call = call;
  }
}

export class FDataAddCall extends ethereum.Call {
  get inputs(): FDataAddCall__Inputs {
    return new FDataAddCall__Inputs(this);
  }

  get outputs(): FDataAddCall__Outputs {
    return new FDataAddCall__Outputs(this);
  }
}

export class FDataAddCall__Inputs {
  _call: FDataAddCall;

  constructor(call: FDataAddCall) {
    this._call = call;
  }

  get data(): FDataAddCallDataStruct {
    return changetype<FDataAddCallDataStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class FDataAddCall__Outputs {
  _call: FDataAddCall;

  constructor(call: FDataAddCall) {
    this._call = call;
  }
}

export class FDataAddCallDataStruct extends ethereum.Tuple {
  get f(): Address {
    return this[0].toAddress();
  }

  get idTroller(): BigInt {
    return this[1].toBigInt();
  }

  get base(): Address {
    return this[2].toAddress();
  }

  get rT(): Address {
    return this[3].toAddress();
  }
}

export class FusePoolAddCall extends ethereum.Call {
  get inputs(): FusePoolAddCall__Inputs {
    return new FusePoolAddCall__Inputs(this);
  }

  get outputs(): FusePoolAddCall__Outputs {
    return new FusePoolAddCall__Outputs(this);
  }
}

export class FusePoolAddCall__Inputs {
  _call: FusePoolAddCall;

  constructor(call: FusePoolAddCall) {
    this._call = call;
  }

  get troller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FusePoolAddCall__Outputs {
  _call: FusePoolAddCall;

  constructor(call: FusePoolAddCall) {
    this._call = call;
  }
}

export class MigrateCall extends ethereum.Call {
  get inputs(): MigrateCall__Inputs {
    return new MigrateCall__Inputs(this);
  }

  get outputs(): MigrateCall__Outputs {
    return new MigrateCall__Outputs(this);
  }
}

export class MigrateCall__Inputs {
  _call: MigrateCall;

  constructor(call: MigrateCall) {
    this._call = call;
  }
}

export class MigrateCall__Outputs {
  _call: MigrateCall;

  constructor(call: MigrateCall) {
    this._call = call;
  }
}

export class PrepareMigrationCall extends ethereum.Call {
  get inputs(): PrepareMigrationCall__Inputs {
    return new PrepareMigrationCall__Inputs(this);
  }

  get outputs(): PrepareMigrationCall__Outputs {
    return new PrepareMigrationCall__Outputs(this);
  }
}

export class PrepareMigrationCall__Inputs {
  _call: PrepareMigrationCall;

  constructor(call: PrepareMigrationCall) {
    this._call = call;
  }
}

export class PrepareMigrationCall__Outputs {
  _call: PrepareMigrationCall;

  constructor(call: PrepareMigrationCall) {
    this._call = call;
  }
}

export class SetAuthorityCall extends ethereum.Call {
  get inputs(): SetAuthorityCall__Inputs {
    return new SetAuthorityCall__Inputs(this);
  }

  get outputs(): SetAuthorityCall__Outputs {
    return new SetAuthorityCall__Outputs(this);
  }
}

export class SetAuthorityCall__Inputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }

  get _newAuthority(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAuthorityCall__Outputs {
  _call: SetAuthorityCall;

  constructor(call: SetAuthorityCall) {
    this._call = call;
  }
}

export class SetRewardsCall extends ethereum.Call {
  get inputs(): SetRewardsCall__Inputs {
    return new SetRewardsCall__Inputs(this);
  }

  get outputs(): SetRewardsCall__Outputs {
    return new SetRewardsCall__Outputs(this);
  }
}

export class SetRewardsCall__Inputs {
  _call: SetRewardsCall;

  constructor(call: SetRewardsCall) {
    this._call = call;
  }

  get newRewards(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRewardsCall__Outputs {
  _call: SetRewardsCall;

  constructor(call: SetRewardsCall) {
    this._call = call;
  }
}

export class SetTreasuryCall extends ethereum.Call {
  get inputs(): SetTreasuryCall__Inputs {
    return new SetTreasuryCall__Inputs(this);
  }

  get outputs(): SetTreasuryCall__Outputs {
    return new SetTreasuryCall__Outputs(this);
  }
}

export class SetTreasuryCall__Inputs {
  _call: SetTreasuryCall;

  constructor(call: SetTreasuryCall) {
    this._call = call;
  }

  get newTreasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTreasuryCall__Outputs {
  _call: SetTreasuryCall;

  constructor(call: SetTreasuryCall) {
    this._call = call;
  }
}

export class UpdateCall extends ethereum.Call {
  get inputs(): UpdateCall__Inputs {
    return new UpdateCall__Inputs(this);
  }

  get outputs(): UpdateCall__Outputs {
    return new UpdateCall__Outputs(this);
  }
}

export class UpdateCall__Inputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateCall__Outputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }
}
