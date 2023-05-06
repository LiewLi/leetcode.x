cc_test(
    name = "test",
    srcs=glob(["**/*.cpp", "**/*.hpp", "**/*.cc", "**/*.h"]),
    copts = ["-std=c++17", "-Iexternal/gtest/include"],
    deps = [
        "@com_google_googletest//:gtest_main",
    ],
)