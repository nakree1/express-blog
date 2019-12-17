export default async function paginate(model, { params, ...query }) {
  const { page, perPage } = getPaginationQuery(params);
  const total = await model.count();
  const pageCount = total > perPage ? Math.ceil( total / perPage) : 1;
  const offset = (page - 1) * perPage;
  const limit = perPage;

  let body = [];

  if (total >= offset) {
    let options = {
      offset,
      limit,
    };

    for (let key in query) {
      options[key] = query[key];
    }

    body = await model.findAll(options);
  }

  return {
    body: body,
    pagination: {
      total: total,
      lastPage: pageCount,
      perPage: perPage,
      page: page,
    }
  }
}

function getPaginationQuery(query) {
  return {
    page: Number(query.page) || 1,
    perPage: Number(query.per_page) || 10
  }
}
