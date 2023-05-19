import Account from 'bundle/core/migration/Account';
import Account_Role from 'bundle/core/migration/Account_Role';
import AccountSetting from 'bundle/core/migration/AccountSetting';
import Configuration from 'bundle/core/migration/Configuration';
import Country from 'bundle/core/migration/Country';
import CountryI18n from 'bundle/core/migration/CountryI18n';
import CountrySubdivision from 'bundle/core/migration/CountrySubdivision';
import CountrySubdivisionI18n from 'bundle/core/migration/CountrySubdivisionI18n';
import Currency from 'bundle/core/migration/Currency';
import Language from 'bundle/core/migration/Language';
import Product from 'bundle/core/migration/Product';
import Product_ProductAttribute from 'bundle/core/migration/Product_ProductAttribute';
import ProductAttribute from 'bundle/core/migration/ProductAttribute';
import ProductAttributeI18n from 'bundle/core/migration/ProductAttributeI18n';
import ProductAttributeValue from 'bundle/core/migration/ProductAttributeValue';
import ProductAttributeValueI18n from 'bundle/core/migration/ProductAttributeValueI18n';
import ProductI18n from 'bundle/core/migration/ProductI18n';
import ProductItem from 'bundle/core/migration/ProductItem';
import ProductItem_ProductAttributeValue from 'bundle/core/migration/ProductItem_ProductAttributeValue';
import Role from 'bundle/core/migration/Role';

export default [
  Language,
  Currency,
  Country,
  CountryI18n,
  CountrySubdivision,
  CountrySubdivisionI18n,
  Account,
  AccountSetting,
  Role,
  Account_Role,
  Product,
  ProductI18n,
  ProductAttribute,
  ProductAttributeI18n,
  ProductAttributeValue,
  ProductAttributeValueI18n,
  Product_ProductAttribute,
  ProductItem,
  ProductItem_ProductAttributeValue,
  Configuration,
];
