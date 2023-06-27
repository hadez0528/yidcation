export type K = { id: string };

export const useStorage = <T extends K>(
  storageName: string,
  defaultEntities: T[] = []
) => {
  const entities = useState<T[]>(`${storageName}Storage`, () => [
    ...defaultEntities,
  ]);

  const createEntity = (entity: Omit<T, "id" | "createdAt">) =>
    entities.value.push({
      id: getShortId(),
      createdAt: getCurrentDateString(),
      ...entity,
    });

  const deleteEntity = (entityId: string) => {
    entities.value = entities.value.filter((entity) => entity.id !== entityId);
  };

  const getEntities = () => entities.value;

  const getEntity = (entityId: string) =>
    entities.value.find((entity) => entity.id === entityId);

  const getEntityByName = (entityName: string) =>
    entities.value.find((entity) => entity.name === entityName);

  const updateEntity = (entity: T) => {
    deleteEntity(entity.id);
    createEntity(entity);
  };

  return {
    entities,
    createEntity,
    deleteEntity,
    getEntities,
    getEntity,
    getEntityByName,
    updateEntity,
  };
};
