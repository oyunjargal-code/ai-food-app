import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RotateCcw, Sparkles } from "lucide-react";
import TextGenerate from "./_components/textGenerate";
import IngredientRecognition from "./_components/ingredientRecognition";
import { GreateImage } from "./_components/greateImage";

export default function Home() {
  return (
    <div>
      <div className="font-bold text-3xl m-10">AI tools</div>
      <div className="w-360 flex justify-center mx-auto">
        <Tabs defaultValue="overview" className="w-[580px]">
          <TabsList>
            <TabsTrigger value="overview" className="text-xl p-4">
              Image analysis
            </TabsTrigger>

            <TabsTrigger value="analytics" className="text-xl p-4">
              Ingredient recognition
            </TabsTrigger>
            <TabsTrigger value="reports" className="text-xl p-4">
              Image creator
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="flex gap-4 text-2xl font-bold">
                      {" "}
                      <Sparkles />
                      Image analysis
                    </CardTitle>
                  </div>
                  <div>
                    <Button variant="outline" disabled>
                      <RotateCcw />
                    </Button>
                  </div>
                </div>

                <CardDescription className="text-xl">
                  Upload a food photo, and AI will detect the ingredients.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <TextGenerate />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex gap-4 text-2xl font-bold">
                  <Sparkles />
                  Ingredient recognition
                </CardTitle>
                <CardDescription className="text-xl">
                  Хоолны орц найрлагыг AI-р таньж гаргана.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <IngredientRecognition />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle className="flex gap-4 text-2xl font-bold">
                  <Sparkles />
                  Food image creator
                </CardTitle>
                <CardDescription className="text-xl">
                  Хоолны нэр бичээд AI зураг үүсгүүлээрэй.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GreateImage />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and options. Customize your
                  experience to fit your needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Configure notifications, security, and themes.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
