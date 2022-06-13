// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DailyBond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DailyBond entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DailyBond must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DailyBond", id.toString(), this);
    }
  }

  static load(id: string): DailyBond | null {
    return changetype<DailyBond | null>(store.get("DailyBond", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class Rebase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rebase entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rebase must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rebase", id.toString(), this);
    }
  }

  static load(id: string): Rebase | null {
    return changetype<Rebase | null>(store.get("Rebase", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get stakedOhms(): BigDecimal {
    let value = this.get("stakedOhms");
    return value!.toBigDecimal();
  }

  set stakedOhms(value: BigDecimal) {
    this.set("stakedOhms", Value.fromBigDecimal(value));
  }

  get percentage(): BigDecimal {
    let value = this.get("percentage");
    return value!.toBigDecimal();
  }

  set percentage(value: BigDecimal) {
    this.set("percentage", Value.fromBigDecimal(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class DailyStakingReward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DailyStakingReward entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DailyStakingReward must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DailyStakingReward", id.toString(), this);
    }
  }

  static load(id: string): DailyStakingReward | null {
    return changetype<DailyStakingReward | null>(
      store.get("DailyStakingReward", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class ProtocolMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProtocolMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ProtocolMetric must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ProtocolMetric", id.toString(), this);
    }
  }

  static load(id: string): ProtocolMetric | null {
    return changetype<ProtocolMetric | null>(store.get("ProtocolMetric", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get ohmCirculatingSupply(): BigDecimal {
    let value = this.get("ohmCirculatingSupply");
    return value!.toBigDecimal();
  }

  set ohmCirculatingSupply(value: BigDecimal) {
    this.set("ohmCirculatingSupply", Value.fromBigDecimal(value));
  }

  get sOhmCirculatingSupply(): BigDecimal {
    let value = this.get("sOhmCirculatingSupply");
    return value!.toBigDecimal();
  }

  set sOhmCirculatingSupply(value: BigDecimal) {
    this.set("sOhmCirculatingSupply", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get ohmPrice(): BigDecimal {
    let value = this.get("ohmPrice");
    return value!.toBigDecimal();
  }

  set ohmPrice(value: BigDecimal) {
    this.set("ohmPrice", Value.fromBigDecimal(value));
  }

  get marketCap(): BigDecimal {
    let value = this.get("marketCap");
    return value!.toBigDecimal();
  }

  set marketCap(value: BigDecimal) {
    this.set("marketCap", Value.fromBigDecimal(value));
  }

  get totalValueLocked(): BigDecimal {
    let value = this.get("totalValueLocked");
    return value!.toBigDecimal();
  }

  set totalValueLocked(value: BigDecimal) {
    this.set("totalValueLocked", Value.fromBigDecimal(value));
  }

  get treasuryRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryRiskFreeValue");
    return value!.toBigDecimal();
  }

  set treasuryRiskFreeValue(value: BigDecimal) {
    this.set("treasuryRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryRiskFreeValueComponents(): string {
    let value = this.get("treasuryRiskFreeValueComponents");
    return value!.toString();
  }

  set treasuryRiskFreeValueComponents(value: string) {
    this.set("treasuryRiskFreeValueComponents", Value.fromString(value));
  }

  get treasuryMarketValue(): BigDecimal {
    let value = this.get("treasuryMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryMarketValue(value: BigDecimal) {
    this.set("treasuryMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryMarketValueComponents(): string {
    let value = this.get("treasuryMarketValueComponents");
    return value!.toString();
  }

  set treasuryMarketValueComponents(value: string) {
    this.set("treasuryMarketValueComponents", Value.fromString(value));
  }

  get nextEpochRebase(): BigDecimal {
    let value = this.get("nextEpochRebase");
    return value!.toBigDecimal();
  }

  set nextEpochRebase(value: BigDecimal) {
    this.set("nextEpochRebase", Value.fromBigDecimal(value));
  }

  get nextDistributedOhm(): BigDecimal {
    let value = this.get("nextDistributedOhm");
    return value!.toBigDecimal();
  }

  set nextDistributedOhm(value: BigDecimal) {
    this.set("nextDistributedOhm", Value.fromBigDecimal(value));
  }

  get treasuryDaiRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryDaiRiskFreeValue");
    return value!.toBigDecimal();
  }

  set treasuryDaiRiskFreeValue(value: BigDecimal) {
    this.set("treasuryDaiRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryDaiRiskFreeValueComponents(): string {
    let value = this.get("treasuryDaiRiskFreeValueComponents");
    return value!.toString();
  }

  set treasuryDaiRiskFreeValueComponents(value: string) {
    this.set("treasuryDaiRiskFreeValueComponents", Value.fromString(value));
  }

  get treasuryFraxRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryFraxRiskFreeValue");
    return value!.toBigDecimal();
  }

  set treasuryFraxRiskFreeValue(value: BigDecimal) {
    this.set("treasuryFraxRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryFraxRiskFreeValueComponents(): string {
    let value = this.get("treasuryFraxRiskFreeValueComponents");
    return value!.toString();
  }

  set treasuryFraxRiskFreeValueComponents(value: string) {
    this.set("treasuryFraxRiskFreeValueComponents", Value.fromString(value));
  }

  get treasuryLusdRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryLusdRiskFreeValue");
    return value!.toBigDecimal();
  }

  set treasuryLusdRiskFreeValue(value: BigDecimal) {
    this.set("treasuryLusdRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryLusdRiskFreeValueComponents(): string {
    let value = this.get("treasuryLusdRiskFreeValueComponents");
    return value!.toString();
  }

  set treasuryLusdRiskFreeValueComponents(value: string) {
    this.set("treasuryLusdRiskFreeValueComponents", Value.fromString(value));
  }

  get treasuryFeiRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryFeiRiskFreeValue");
    return value!.toBigDecimal();
  }

  set treasuryFeiRiskFreeValue(value: BigDecimal) {
    this.set("treasuryFeiRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryFeiRiskFreeValueComponents(): string {
    let value = this.get("treasuryFeiRiskFreeValueComponents");
    return value!.toString();
  }

  set treasuryFeiRiskFreeValueComponents(value: string) {
    this.set("treasuryFeiRiskFreeValueComponents", Value.fromString(value));
  }

  get treasuryWETHRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryWETHRiskFreeValue");
    return value!.toBigDecimal();
  }

  set treasuryWETHRiskFreeValue(value: BigDecimal) {
    this.set("treasuryWETHRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryWETHRiskFreeValueComponents(): string {
    let value = this.get("treasuryWETHRiskFreeValueComponents");
    return value!.toString();
  }

  set treasuryWETHRiskFreeValueComponents(value: string) {
    this.set("treasuryWETHRiskFreeValueComponents", Value.fromString(value));
  }

  get treasuryDaiMarketValue(): BigDecimal {
    let value = this.get("treasuryDaiMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryDaiMarketValue(value: BigDecimal) {
    this.set("treasuryDaiMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryDaiMarketValueComponents(): string {
    let value = this.get("treasuryDaiMarketValueComponents");
    return value!.toString();
  }

  set treasuryDaiMarketValueComponents(value: string) {
    this.set("treasuryDaiMarketValueComponents", Value.fromString(value));
  }

  get treasuryFraxMarketValue(): BigDecimal {
    let value = this.get("treasuryFraxMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryFraxMarketValue(value: BigDecimal) {
    this.set("treasuryFraxMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryFraxMarketValueComponents(): string {
    let value = this.get("treasuryFraxMarketValueComponents");
    return value!.toString();
  }

  set treasuryFraxMarketValueComponents(value: string) {
    this.set("treasuryFraxMarketValueComponents", Value.fromString(value));
  }

  get treasuryLusdMarketValue(): BigDecimal {
    let value = this.get("treasuryLusdMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryLusdMarketValue(value: BigDecimal) {
    this.set("treasuryLusdMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryLusdMarketValueComponents(): string {
    let value = this.get("treasuryLusdMarketValueComponents");
    return value!.toString();
  }

  set treasuryLusdMarketValueComponents(value: string) {
    this.set("treasuryLusdMarketValueComponents", Value.fromString(value));
  }

  get treasuryFeiMarketValue(): BigDecimal {
    let value = this.get("treasuryFeiMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryFeiMarketValue(value: BigDecimal) {
    this.set("treasuryFeiMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryFeiMarketValueComponents(): string {
    let value = this.get("treasuryFeiMarketValueComponents");
    return value!.toString();
  }

  set treasuryFeiMarketValueComponents(value: string) {
    this.set("treasuryFeiMarketValueComponents", Value.fromString(value));
  }

  get treasuryUstMarketValue(): BigDecimal {
    let value = this.get("treasuryUstMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryUstMarketValue(value: BigDecimal) {
    this.set("treasuryUstMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryUstMarketValueComponents(): string {
    let value = this.get("treasuryUstMarketValueComponents");
    return value!.toString();
  }

  set treasuryUstMarketValueComponents(value: string) {
    this.set("treasuryUstMarketValueComponents", Value.fromString(value));
  }

  get treasuryXsushiMarketValue(): BigDecimal {
    let value = this.get("treasuryXsushiMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryXsushiMarketValue(value: BigDecimal) {
    this.set("treasuryXsushiMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryXsushiMarketValueComponents(): string {
    let value = this.get("treasuryXsushiMarketValueComponents");
    return value!.toString();
  }

  set treasuryXsushiMarketValueComponents(value: string) {
    this.set("treasuryXsushiMarketValueComponents", Value.fromString(value));
  }

  get treasuryWETHMarketValue(): BigDecimal {
    let value = this.get("treasuryWETHMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryWETHMarketValue(value: BigDecimal) {
    this.set("treasuryWETHMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryWETHMarketValueComponents(): string {
    let value = this.get("treasuryWETHMarketValueComponents");
    return value!.toString();
  }

  set treasuryWETHMarketValueComponents(value: string) {
    this.set("treasuryWETHMarketValueComponents", Value.fromString(value));
  }

  get treasuryWBTCMarketValue(): BigDecimal {
    let value = this.get("treasuryWBTCMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryWBTCMarketValue(value: BigDecimal) {
    this.set("treasuryWBTCMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryWBTCMarketValueComponents(): string {
    let value = this.get("treasuryWBTCMarketValueComponents");
    return value!.toString();
  }

  set treasuryWBTCMarketValueComponents(value: string) {
    this.set("treasuryWBTCMarketValueComponents", Value.fromString(value));
  }

  get treasuryCVXMarketValue(): BigDecimal {
    let value = this.get("treasuryCVXMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryCVXMarketValue(value: BigDecimal) {
    this.set("treasuryCVXMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryCVXMarketValueComponents(): string {
    let value = this.get("treasuryCVXMarketValueComponents");
    return value!.toString();
  }

  set treasuryCVXMarketValueComponents(value: string) {
    this.set("treasuryCVXMarketValueComponents", Value.fromString(value));
  }

  get treasuryFXSMarketValue(): BigDecimal {
    let value = this.get("treasuryFXSMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryFXSMarketValue(value: BigDecimal) {
    this.set("treasuryFXSMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryFXSMarketValueComponents(): string {
    let value = this.get("treasuryFXSMarketValueComponents");
    return value!.toString();
  }

  set treasuryFXSMarketValueComponents(value: string) {
    this.set("treasuryFXSMarketValueComponents", Value.fromString(value));
  }

  get treasuryOtherMarketValue(): BigDecimal {
    let value = this.get("treasuryOtherMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryOtherMarketValue(value: BigDecimal) {
    this.set("treasuryOtherMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryOtherMarketValueComponents(): string {
    let value = this.get("treasuryOtherMarketValueComponents");
    return value!.toString();
  }

  set treasuryOtherMarketValueComponents(value: string) {
    this.set("treasuryOtherMarketValueComponents", Value.fromString(value));
  }

  get treasuryLPValue(): BigDecimal {
    let value = this.get("treasuryLPValue");
    return value!.toBigDecimal();
  }

  set treasuryLPValue(value: BigDecimal) {
    this.set("treasuryLPValue", Value.fromBigDecimal(value));
  }

  get treasuryLPValueComponents(): string {
    let value = this.get("treasuryLPValueComponents");
    return value!.toString();
  }

  set treasuryLPValueComponents(value: string) {
    this.set("treasuryLPValueComponents", Value.fromString(value));
  }

  get treasuryStableBacking(): BigDecimal {
    let value = this.get("treasuryStableBacking");
    return value!.toBigDecimal();
  }

  set treasuryStableBacking(value: BigDecimal) {
    this.set("treasuryStableBacking", Value.fromBigDecimal(value));
  }

  get treasuryStableBackingComponents(): string {
    let value = this.get("treasuryStableBackingComponents");
    return value!.toString();
  }

  set treasuryStableBackingComponents(value: string) {
    this.set("treasuryStableBackingComponents", Value.fromString(value));
  }

  get treasuryVolatileBacking(): BigDecimal {
    let value = this.get("treasuryVolatileBacking");
    return value!.toBigDecimal();
  }

  set treasuryVolatileBacking(value: BigDecimal) {
    this.set("treasuryVolatileBacking", Value.fromBigDecimal(value));
  }

  get treasuryVolatileBackingComponents(): string {
    let value = this.get("treasuryVolatileBackingComponents");
    return value!.toString();
  }

  set treasuryVolatileBackingComponents(value: string) {
    this.set("treasuryVolatileBackingComponents", Value.fromString(value));
  }

  get treasuryTotalBacking(): BigDecimal {
    let value = this.get("treasuryTotalBacking");
    return value!.toBigDecimal();
  }

  set treasuryTotalBacking(value: BigDecimal) {
    this.set("treasuryTotalBacking", Value.fromBigDecimal(value));
  }

  get treasuryTotalBackingComponents(): string {
    let value = this.get("treasuryTotalBackingComponents");
    return value!.toString();
  }

  set treasuryTotalBackingComponents(value: string) {
    this.set("treasuryTotalBackingComponents", Value.fromString(value));
  }

  get treasuryTotalBackingPerOhm(): BigDecimal {
    let value = this.get("treasuryTotalBackingPerOhm");
    return value!.toBigDecimal();
  }

  set treasuryTotalBackingPerOhm(value: BigDecimal) {
    this.set("treasuryTotalBackingPerOhm", Value.fromBigDecimal(value));
  }

  get currentAPY(): BigDecimal {
    let value = this.get("currentAPY");
    return value!.toBigDecimal();
  }

  set currentAPY(value: BigDecimal) {
    this.set("currentAPY", Value.fromBigDecimal(value));
  }

  get runway2dot5k(): BigDecimal | null {
    let value = this.get("runway2dot5k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway2dot5k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway2dot5k");
    } else {
      this.set("runway2dot5k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runway5k(): BigDecimal | null {
    let value = this.get("runway5k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway5k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway5k");
    } else {
      this.set("runway5k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runway7dot5k(): BigDecimal | null {
    let value = this.get("runway7dot5k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway7dot5k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway7dot5k");
    } else {
      this.set("runway7dot5k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runway10k(): BigDecimal | null {
    let value = this.get("runway10k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway10k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway10k");
    } else {
      this.set("runway10k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runway20k(): BigDecimal | null {
    let value = this.get("runway20k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway20k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway20k");
    } else {
      this.set("runway20k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runway50k(): BigDecimal | null {
    let value = this.get("runway50k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway50k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway50k");
    } else {
      this.set("runway50k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runway70k(): BigDecimal | null {
    let value = this.get("runway70k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway70k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway70k");
    } else {
      this.set("runway70k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runway100k(): BigDecimal | null {
    let value = this.get("runway100k");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway100k(value: BigDecimal | null) {
    if (!value) {
      this.unset("runway100k");
    } else {
      this.set("runway100k", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get runwayCurrent(): BigDecimal | null {
    let value = this.get("runwayCurrent");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runwayCurrent(value: BigDecimal | null) {
    if (!value) {
      this.unset("runwayCurrent");
    } else {
      this.set("runwayCurrent", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get treasuryOhmDaiPOL(): BigDecimal {
    let value = this.get("treasuryOhmDaiPOL");
    return value!.toBigDecimal();
  }

  set treasuryOhmDaiPOL(value: BigDecimal) {
    this.set("treasuryOhmDaiPOL", Value.fromBigDecimal(value));
  }

  get treasuryOhmFraxPOL(): BigDecimal {
    let value = this.get("treasuryOhmFraxPOL");
    return value!.toBigDecimal();
  }

  set treasuryOhmFraxPOL(value: BigDecimal) {
    this.set("treasuryOhmFraxPOL", Value.fromBigDecimal(value));
  }

  get treasuryOhmLusdPOL(): BigDecimal {
    let value = this.get("treasuryOhmLusdPOL");
    return value!.toBigDecimal();
  }

  set treasuryOhmLusdPOL(value: BigDecimal) {
    this.set("treasuryOhmLusdPOL", Value.fromBigDecimal(value));
  }

  get treasuryOhmEthPOL(): BigDecimal {
    let value = this.get("treasuryOhmEthPOL");
    return value!.toBigDecimal();
  }

  set treasuryOhmEthPOL(value: BigDecimal) {
    this.set("treasuryOhmEthPOL", Value.fromBigDecimal(value));
  }
}

export class BondDiscount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BondDiscount entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BondDiscount must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BondDiscount", id.toString(), this);
    }
  }

  static load(id: string): BondDiscount | null {
    return changetype<BondDiscount | null>(store.get("BondDiscount", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get dai_discount(): BigDecimal {
    let value = this.get("dai_discount");
    return value!.toBigDecimal();
  }

  set dai_discount(value: BigDecimal) {
    this.set("dai_discount", Value.fromBigDecimal(value));
  }

  get ohmdai_discount(): BigDecimal {
    let value = this.get("ohmdai_discount");
    return value!.toBigDecimal();
  }

  set ohmdai_discount(value: BigDecimal) {
    this.set("ohmdai_discount", Value.fromBigDecimal(value));
  }

  get frax_discount(): BigDecimal {
    let value = this.get("frax_discount");
    return value!.toBigDecimal();
  }

  set frax_discount(value: BigDecimal) {
    this.set("frax_discount", Value.fromBigDecimal(value));
  }

  get ohmfrax_discount(): BigDecimal {
    let value = this.get("ohmfrax_discount");
    return value!.toBigDecimal();
  }

  set ohmfrax_discount(value: BigDecimal) {
    this.set("ohmfrax_discount", Value.fromBigDecimal(value));
  }

  get eth_discount(): BigDecimal {
    let value = this.get("eth_discount");
    return value!.toBigDecimal();
  }

  set eth_discount(value: BigDecimal) {
    this.set("eth_discount", Value.fromBigDecimal(value));
  }

  get lusd_discount(): BigDecimal {
    let value = this.get("lusd_discount");
    return value!.toBigDecimal();
  }

  set lusd_discount(value: BigDecimal) {
    this.set("lusd_discount", Value.fromBigDecimal(value));
  }

  get ohmlusd_discount(): BigDecimal {
    let value = this.get("ohmlusd_discount");
    return value!.toBigDecimal();
  }

  set ohmlusd_discount(value: BigDecimal) {
    this.set("ohmlusd_discount", Value.fromBigDecimal(value));
  }
}

export class TokenRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenRecord must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenRecord", id.toString(), this);
    }
  }

  static load(id: string): TokenRecord | null {
    return changetype<TokenRecord | null>(store.get("TokenRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get source(): string {
    let value = this.get("source");
    return value!.toString();
  }

  set source(value: string) {
    this.set("source", Value.fromString(value));
  }

  get sourceAddress(): string {
    let value = this.get("sourceAddress");
    return value!.toString();
  }

  set sourceAddress(value: string) {
    this.set("sourceAddress", Value.fromString(value));
  }

  get rate(): BigDecimal {
    let value = this.get("rate");
    return value!.toBigDecimal();
  }

  set rate(value: BigDecimal) {
    this.set("rate", Value.fromBigDecimal(value));
  }

  get balance(): BigDecimal {
    let value = this.get("balance");
    return value!.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }

  get multiplier(): BigDecimal {
    let value = this.get("multiplier");
    return value!.toBigDecimal();
  }

  set multiplier(value: BigDecimal) {
    this.set("multiplier", Value.fromBigDecimal(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class TokenRecords extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenRecords entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenRecords must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenRecords", id.toString(), this);
    }
  }

  static load(id: string): TokenRecords | null {
    return changetype<TokenRecords | null>(store.get("TokenRecords", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get records(): Array<string> {
    let value = this.get("records");
    return value!.toStringArray();
  }

  set records(value: Array<string>) {
    this.set("records", Value.fromStringArray(value));
  }

  get balance(): BigDecimal {
    let value = this.get("balance");
    return value!.toBigDecimal();
  }

  set balance(value: BigDecimal) {
    this.set("balance", Value.fromBigDecimal(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}
