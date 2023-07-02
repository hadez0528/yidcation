export type K = { id: string };

export const useStorage = <T extends K>(
  storageName: string,
  defaultEntities: T[] = []
) => {
  const entities = useState<T[]>(`${storageName}Storage`, () => [
    ...defaultEntities,
  ]);

  const createEntity = (entity: Omit<T, "id" | "createdAt">) => {
    const newEntity: T = {
      id: getShortId(),
      createdAt: getCurrentDateString(),
      ...entity,
    };
    entities.value.push(newEntity);
  };

  const deleteEntity = (entityId: string) => {
    entities.value = entities.value.filter((entity) => entity.id !== entityId);
  };

  const getEntities = () => entities.value;

  const getEntity = (entityId: string) =>
    entities.value.find((entity) => entity.id === entityId);

  const getEntityByName = (entityName: string) =>
    entities.value.find((entity) => entity.name === entityName);

  const updateEntity = (entity: T) => {
    const index = entities.value.findIndex((e) => e.id === entity.id);
    if (index !== -1) {
      entities.value.splice(index, 1, entity);
    }
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
