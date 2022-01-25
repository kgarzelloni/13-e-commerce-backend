const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  res.json(tagData);
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne(req.params.id).then((tagData) => {
    res.json(tagData);
  });
});

router.post('/', (req, res) => {
  // create a new tag
 Tag.create({
    id: req.body.id,
    name: req.body.name,
  })
    .then((newTag) => {
      // Send the newly created row as a JSON object
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(tagData);
});


router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      }).catch((err) => res.json(err));
      res.json(tagData);
    });
  

module.exports = router;
