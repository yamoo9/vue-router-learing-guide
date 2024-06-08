/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8rtisczbtmn5lov")

  collection.name = "products"
  collection.listRule = ""
  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8rtisczbtmn5lov")

  collection.name = "products_backup"
  collection.listRule = null
  collection.createRule = ""

  return dao.saveCollection(collection)
})
