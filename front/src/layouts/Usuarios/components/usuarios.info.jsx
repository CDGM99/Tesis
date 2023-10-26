import PropTypes from "prop-types";
import FormField from "../../../components/FormField";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { useGetGroupsQuery } from "../../../services/Groups";
import { useEffect, useState } from "react";
import { useGetUsuariosByIdQuery } from "../../../services/Usuarios";

function AddUsuario({ formData, old }) {
  const { formField, values, handleBlur, setFieldValue, id } = formData;
  const { name, apellidos, email, password, password1, groups } = formField;
  const {
    name: nameV,
    apellidos: apellidosV,
    email: emailV,
    password: passwordV,
    password1: password1V,
    groups: groupsV,
  } = values;

  const {
    data: grupos,
    isSuccess: isSuccess,
    isLoading: isLoading,
  } = useGetGroupsQuery(undefined, {
    refetchOnReconnect: true,
  });

  const {
    data: usuario,
    isSuccess: isSuccessGU,
    isLoading: isLoadingGU,
  } = useGetUsuariosByIdQuery(old);

  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (isSuccessGU && isSuccess) {
      const userGroupNames = [];

      usuario.groups.forEach((groupId) => {
        const foundGroup = grupos.find((group) => group.id === groupId);
        if (foundGroup) {
          userGroupNames.push(foundGroup.name);
        }
      });

      setSelected(userGroupNames.join(", "));
    }
  }, [isLoading, isLoadingGU, isSuccess, grupos, usuario]);

  const handleGroup = (name) => {
    const foundItem = grupos.find((item) => item.name === name);

    if (foundItem && foundItem.id !== undefined) {
      setSelected(foundItem.name);
      setFieldValue(groups.name, [foundItem.id], true);
    }
  };

  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <FormField
              type={name.type}
              label={name.label}
              name={name.name}
              value={nameV}
              placeholder={name.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={apellidos.type}
              label={apellidos.label}
              name={apellidos.name}
              value={apellidosV}
              placeholder={apellidos.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              select
              name={groups.name}
              label={groups.label}
              value={selected}
              onValueChange={(value) => handleGroup(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {grupos?.map((el) => (
                  <SelectItem key={el.id} value={el.name}>
                    {el.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </FormField>
          </div>
        </div>
        {!id && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <FormField
                  type={password.type}
                  label={password.label}
                  name={password.name}
                  value={passwordV}
                  placeholder={password.placeholder}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <FormField
                  type={password1.type}
                  label={password1.label}
                  name={password1.name}
                  value={password1V}
                  placeholder={password1.placeholder}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

AddUsuario.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddUsuario;
