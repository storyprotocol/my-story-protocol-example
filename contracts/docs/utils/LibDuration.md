# Solidity API

## LibDuration

### TimeConfig

```solidity
struct TimeConfig {
  uint64 ttl;
  uint64 startTime;
  address renewer;
}
```

### START_TIME_NOT_SET

```solidity
uint64 START_TIME_NOT_SET
```

### isActive

```solidity
function isActive(struct LibDuration.TimeConfig self_) internal view returns (bool)
```

### renew

```solidity
function renew(struct LibDuration.TimeConfig self_, uint64 ttl_) internal view
```

### createRunningTimeConfig

```solidity
function createRunningTimeConfig(uint64 ttl_, address renewer_) internal view returns (struct LibDuration.TimeConfig)
```

### isRenewable

```solidity
function isRenewable(struct LibDuration.TimeConfig self_) internal pure returns (bool)
```

### createStoppedTimeConfig

```solidity
function createStoppedTimeConfig(uint64 ttl_, address renewer_) internal pure returns (struct LibDuration.TimeConfig)
```

