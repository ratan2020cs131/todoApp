import { classNames } from "primereact/utils";

const TRANSITIONS = {
  overlay: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass:
      "transition-transform transition-opacity duration-150 ease-in",
    leaveActiveClass: "transition-opacity duration-150 ease-linear",
    leaveToClass: "opacity-0",
  },
};

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
      className: classNames(
        "w-full rounded-lg px-4 py-2 bg-primary-gray border border-primary-dark",
        {
          "hover:border-blue-500 focus:outline-none focus:border-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]":
            !context.disabled,
          "opacity-60 select-none pointer-events-none cursor-default":
            context.disabled,
        }
      ),
    }),
  },
  dialog: {
    root: {
      className: classNames(
        "rounded-lg bg-primary-white border-none shadow-lg",
        "max-h-[90%] transform scale-100",
        "m-0",
        "dark:border dark:border-blue-900/40 p-4"
      ),
    },
    header: {
      className: classNames("flex items-center justify-between shrink-0 pb-4"),
    },
    mask: {
      className: "bg-[rgb(0,0,0,0.7)]",
    },
  },
  button: {
    root: {
      className: classNames(
        "items-center gap-2 cursor-pointer inline-flex bg-primary px-4 py-2 rounded-md"
      ),
    },
  },
  dropdown: {
    root: ({ props }) => ({
      className: classNames(
        "cursor-pointer inline-flex relative select-none",
        "bg-primary-white border border-primary-dark transition-colors duration-200 ease-in-out rounded-md",
        "hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]"
      ),
    }),
    input: ({ props }) => ({
      className: classNames(
        "cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative",
        "dark:text-white/80",
        "px-3 py-1 transition duration-200 bg-transparent rounded appearance-none font-sans text-base",
        "focus:outline-none focus:shadow-none"
      ),
    }),
    trigger: {
      className: classNames(
        "flex items-center justify-center shrink-0",
        "bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg"
      ),
    },
    wrapper: {
      className: classNames(
        "max-h-[200px] overflow-auto",
        "bg-primary-white border-0 rounded-md shadow-lg"
      ),
    },
    list: "list-none",
    item: ({ context }) => ({
      className: classNames(
        "cursor-pointer overflow-hidden relative whitespace-nowrap",
        "m-0 px-3 py-1 border-0  transition-shadow duration-200 rounded-none outline-none",
        "hover:bg-primary-gray",
        {
          "bg-primary-gray": context.selected,
        }
      ),
    }),
    transition: TRANSITIONS.overlay,
  },
};

export default DesignSystem;
