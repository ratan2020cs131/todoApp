import { classNames, mask } from "primereact/utils";

const DesignSystem = {
  checkbox: {
    root: {
      className: classNames(
        "cursor-pointer inline-flex relative select-none align-bottom",
        "w-5 h-5"
      ),
    },
    input: {
      className: classNames(
        "absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer"
      ),
    },
    box: ({ props }) => ({
      className: classNames(
        "flex p-0 items-center justify-center",
        "w-5 h-5 text-gray-600 rounded-md transition-colors duration-200",
        {
          "border-2 border-primary-black": !props.checked,
        }
      ),
    }),
  },
  inputtext: {
    root: ({ context }) => ({
      className: classNames("rounded-lg px-4 py-2 bg-primary-gray", {
        "hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]":
          !context.disabled,
        "opacity-60 select-none pointer-events-none cursor-default":
          context.disabled,
      }),
    }),
  },
  dialog: {
    root: {
      className: classNames(
        "rounded-lg bg-primary-white border-none shadow-lg",
        "max-h-[90%] transform scale-100",
        "m-0 w-[50vw]",
        "dark:border dark:border-blue-900/40 p-4"
      ),
    },
    header: {
      className: classNames("flex items-center justify-between shrink-0 pb-4"),
    },
    mask:{
      className:"bg-[rgb(0,0,0,0.7)]"
    }
  },
};

export default DesignSystem;
