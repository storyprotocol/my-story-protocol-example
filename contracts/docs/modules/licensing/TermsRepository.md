# Solidity API

## TermsRepository

Protocol repository for terms that can be used by Licensing Modules to compose
licenses. Terms are grouped by categories, and each term has a unique id within its category.
Terms are added by the protocol.
The text of the terms is not stored in the contract, but in external storage.

### TermCategoryAdded

```solidity
event TermCategoryAdded(string category)
```

### TermCategoryRemoved

```solidity
event TermCategoryRemoved(string category)
```

### TermAdded

```solidity
event TermAdded(string category, string termId)
```

### TermDisabled

```solidity
event TermDisabled(string category, string termId)
```

### onlyValidTerm

```solidity
modifier onlyValidTerm(ShortString termId_)
```

### onlyValidTermString

```solidity
modifier onlyValidTermString(string termId_)
```

### constructor

```solidity
constructor(address accessControl_) public
```

### addCategory

```solidity
function addCategory(string category_) public
```

Adds a new category of terms

### removeCategory

```solidity
function removeCategory(string category_) public
```

Removes a category of terms

### totalTermCategories

```solidity
function totalTermCategories() public view returns (uint256)
```

Returns the total number of term categories

### termCategoryAt

```solidity
function termCategoryAt(uint256 index_) public view returns (string)
```

Returns the term category at the given index

### addTerm

```solidity
function addTerm(string category_, string termId_, struct Licensing.LicensingTerm term_) public
```

Adds a new term to a category

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| category_ | string | The category to add the term to |
| termId_ | string | The unique id of the term within the category |
| term_ | struct Licensing.LicensingTerm | The term definition |

### categoryForTerm

```solidity
function categoryForTerm(string termId_) public view returns (string)
```

### shortStringCategoryForTerm

```solidity
function shortStringCategoryForTerm(ShortString termId_) public view returns (ShortString)
```

### getTerm

```solidity
function getTerm(ShortString termId_) public view returns (struct Licensing.LicensingTerm)
```

### getTermHook

```solidity
function getTermHook(ShortString termId_) public view returns (contract IHook)
```

### getTerm

```solidity
function getTerm(string termId_) public view returns (struct Licensing.LicensingTerm)
```

### totalTermsForCategory

```solidity
function totalTermsForCategory(string category_) public view returns (uint256)
```

### termForCategoryAt

```solidity
function termForCategoryAt(string category_, uint256 index_) public view returns (struct Licensing.LicensingTerm)
```

