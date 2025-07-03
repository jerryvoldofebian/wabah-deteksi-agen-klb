
import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertTriangle, Clock, TestTube, Package, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { klbData, searchBySymptoms, filterByIncubationTime, filterByCategory, KLBData } from '@/data/klbData';

const KLBIdentificationApp = () => {
  const [searchSymptoms, setSearchSymptoms] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFood, setSelectedFood] = useState<string>('all');
  const [minIncubation, setMinIncubation] = useState<string>('');
  const [maxIncubation, setMaxIncubation] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Extract unique food items for filter
  const uniqueFoods = useMemo(() => {
    const foods = new Set<string>();
    klbData.forEach(item => {
      item.panganTerlibat.forEach(food => {
        foods.add(food.toLowerCase());
      });
    });
    return Array.from(foods).sort();
  }, []);

  // Extract symptoms from search input
  const symptomsList = useMemo(() => {
    return searchSymptoms
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }, [searchSymptoms]);

  // Filter by food
  const filterByFood = (data: KLBData[], foodFilter: string) => {
    if (!foodFilter || foodFilter === 'all') return data;
    return data.filter(item => 
      item.panganTerlibat.some(food => 
        food.toLowerCase().includes(foodFilter.toLowerCase())
      )
    );
  };

  // Filter data based on search criteria
  const filteredData = useMemo(() => {
    let results = klbData;

    // Filter by symptoms
    if (symptomsList.length > 0) {
      results = searchBySymptoms(symptomsList);
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      results = filterByCategory(results, selectedCategory);
    }

    // Filter by food
    if (selectedFood && selectedFood !== 'all') {
      results = filterByFood(results, selectedFood);
    }

    // Filter by incubation time
    const minMin = minIncubation ? parseInt(minIncubation) : undefined;
    const maxMin = maxIncubation ? parseInt(maxIncubation) : undefined;
    results = filterByIncubationTime(results, minMin, maxMin);

    return results;
  }, [symptomsList, selectedCategory, selectedFood, minIncubation, maxIncubation]);

  const toggleCardExpansion = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      bacterial: 'bg-red-50 text-red-900 border-red-200',
      viral: 'bg-purple-50 text-purple-900 border-purple-200',
      toxin: 'bg-orange-50 text-orange-900 border-orange-200',
      parasitic: 'bg-green-50 text-green-900 border-green-200',
      digestive: 'bg-blue-50 text-blue-900 border-blue-200',
      neural: 'bg-indigo-50 text-indigo-900 border-indigo-200',
      respiratory: 'bg-teal-50 text-teal-900 border-teal-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 text-gray-900 border-gray-200';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      bacterial: 'Bakteri',
      viral: 'Virus',
      toxin: 'Toksin',
      parasitic: 'Parasit',
      digestive: 'Pencernaan',
      neural: 'Saraf',
      respiratory: 'Pernafasan'
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-4 shadow-lg">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sistem Identifikasi KLB
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Aplikasi bantu untuk petugas BPOM dan Dinas Kesehatan dalam mengidentifikasi 
            agen penyebab Kejadian Luar Biasa (KLB) berdasarkan gejala dan waktu inkubasi
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-6 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Search className="w-5 h-5" />
              Pencarian dan Filter
            </CardTitle>
            <CardDescription className="text-gray-600">
              Masukkan gejala yang diamati dan atur filter untuk mempersempit hasil pencarian
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Symptoms Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-800">Gejala yang Diamati</label>
              <Input
                placeholder="Contoh: mual, muntah, diare, demam (pisahkan dengan koma)"
                value={searchSymptoms}
                onChange={(e) => setSearchSymptoms(e.target.value)}
                className="w-full border-gray-300 focus:border-blue-500"
              />
              <p className="text-xs text-gray-600">
                Masukkan gejala yang terlihat, pisahkan dengan koma untuk multiple gejala
              </p>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">Kategori Penyebab</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500">
                    <SelectValue placeholder="Semua kategori" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="all">Semua kategori</SelectItem>
                    <SelectItem value="bacterial">Bakteri</SelectItem>
                    <SelectItem value="viral">Virus</SelectItem>
                    <SelectItem value="toxin">Toksin</SelectItem>
                    <SelectItem value="parasitic">Parasit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Food Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">Pangan Terlibat</label>
                <Select value={selectedFood} onValueChange={setSelectedFood}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500">
                    <SelectValue placeholder="Semua pangan" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 max-h-60">
                    <SelectItem value="all">Semua pangan</SelectItem>
                    {uniqueFoods.map((food) => (
                      <SelectItem key={food} value={food} className="capitalize">
                        {food}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Incubation Time Min */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">Waktu Inkubasi Min (menit)</label>
                <Input
                  type="number"
                  placeholder="contoh: 30"
                  value={minIncubation}
                  onChange={(e) => setMinIncubation(e.target.value)}
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>

              {/* Incubation Time Max */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">Waktu Inkubasi Max (menit)</label>
                <Input
                  type="number"
                  placeholder="contoh: 1440"
                  value={maxIncubation}
                  onChange={(e) => setMaxIncubation(e.target.value)}
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-2 pt-2">
              <Filter className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">
                Ditemukan {filteredData.length} dari {klbData.length} kemungkinan penyebab
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <Card className="text-center py-12 bg-white">
              <CardContent>
                <TestTube className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Tidak Ada Hasil</h3>
                <p className="text-gray-600">
                  Tidak ditemukan penyakit yang sesuai dengan kriteria pencarian. 
                  Coba ubah kata kunci atau filter pencarian.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredData.map((item) => (
              <Collapsible key={item.id} className="w-full">
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm">
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleCardExpansion(item.id)}
                  >
                    <CardHeader className="cursor-pointer hover:bg-gray-50/70 transition-colors rounded-t-lg">
                      <div className="flex items-start justify-between">
                        <div className="text-left flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-lg text-gray-900">
                              {item.penyakit}
                            </CardTitle>
                            <Badge className={getCategoryColor(item.kategori)}>
                              {getCategoryLabel(item.kategori)}
                            </Badge>
                          </div>
                          <CardDescription className="text-left">
                            <div className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-1 text-gray-700">
                                <Clock className="w-4 h-4" />
                                {item.waktuInkubasi}
                              </span>
                              <span className="text-gray-600">
                                {item.penyebabEtiologi.substring(0, 80)}...
                              </span>
                            </div>
                          </CardDescription>
                        </div>
                        <div className="ml-4">
                          {expandedCards.has(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <Separator className="mb-4" />
                      
                      <div className="space-y-4">
                        {/* Penyebab Etiologi */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <TestTube className="w-4 h-4 text-blue-600" />
                            Penyebab Etiologi
                          </h4>
                          <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                            {item.penyebabEtiologi}
                          </p>
                        </div>

                        {/* Tanda dan Gejala */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-600" />
                            Tanda dan Gejala
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.tandaGejala.map((gejala, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className="bg-orange-50 border-orange-200 text-orange-900"
                              >
                                {gejala}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Pangan Terlibat */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Package className="w-4 h-4 text-green-600" />
                            Pangan yang Biasanya Terlibat
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.panganTerlibat.map((pangan, index) => (
                              <Badge 
                                key={index} 
                                variant="outline"
                                className="bg-green-50 border-green-200 text-green-900"
                              >
                                {pangan}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Sampel/Spesimen */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <TestTube className="w-4 h-4 text-blue-600" />
                            Sampel/Spesimen yang Dikumpulkan
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.sampelSpesimen.map((sampel, index) => (
                              <Badge 
                                key={index} 
                                variant="outline"
                                className="bg-blue-50 border-blue-200 text-blue-900"
                              >
                                {sampel}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Faktor Kontribusi */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Faktor yang Berkontribusi terhadap KLB
                          </h4>
                          <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                            {item.faktorKontribusi}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))
          )}
        </div>

        {/* Footer Info */}
        <Card className="mt-8 bg-blue-50/50 border-0">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-gray-700">
              Aplikasi ini berdasarkan data tabel identifikasi KLB untuk membantu petugas BPOM dan Dinas Kesehatan. 
              Selalu konsultasikan dengan ahli epidemiologi untuk diagnosis yang akurat.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KLBIdentificationApp;
