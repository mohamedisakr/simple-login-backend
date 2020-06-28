const getOne = (model) => async (req, res) => {
  const id = req.params.id;
  const student = await model.findById(id);
};

const getMany = (model) => async (req, res) => {};

const createOne = (model) => async (req, res) => {};

const updateOne = (model) => async (req, res) => {};

const removeOne = (model) => async (req, res) => {};

const crudControllers = (model) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
});

module.exports = {
  getOne,
  getMany,
  createOne,
  updateOne,
  removeOne,
  crudControllers,
};
